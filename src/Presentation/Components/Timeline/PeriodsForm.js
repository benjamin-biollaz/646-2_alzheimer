import React from 'react'
import { useContext, useState } from 'react';
import GenericForm from '../Form/GenericForm';
import Period from './Period';
import { PeriodWithId } from '../../../DTO/PeriodWithId';
import { PeriodDAO } from '../../../DAL/PeriodDAO'
import AddPeriod from './AddPeriod';
import { ResidentContext } from '../../../Context/ResidentContext';
import { async } from '@firebase/util';
import { PeriodDTO } from '../../../DTO/PeriodDTO';

function PeriodsForm({ periods }) {

    const [periodState, setPeriodState] = useState(periods);
    var addedItemsCount = 0; // used to generate ids

    // those two collections store periods before/after modifications
    // to access database only if changes have been made
    var periodsBeforeEdition = [...periods];

    // this functions is passed to the child to keep tack of changes
    const updatePeriodsList = (periodId, periodDTO) => {
        var foundIndex = periodState.findIndex(p => p.id == periodId);
        const elements = periodState;
        elements[foundIndex] = new PeriodWithId(periodId, periodDTO);
        setPeriodState(elements);
    }

    const updatePeriodsInDB = async () => {
        const periodDAO = new PeriodDAO();
        const timelineId = localStorage.getItem("timelineId");

        for (const per of periodState) {

            // the id of type int are the newly added one because Firestore
            // generates only String id
            if (typeof (per.id) === "number") {
                // add the new event
                console.log(per);   
                const newId = await periodDAO.addPeriod(timelineId, per.periodDTO.startDate,
                    per.periodDTO.endDate, per.periodDTO.name);
                setNewItemId(newId, per.id);
                continue;
            }

            // update each event
            const periodIndex = periodsBeforeEdition.findIndex(p => p.id == per.id)
            periodDAO.updatePeriod(timelineId, periodsBeforeEdition[periodIndex], per.periodDTO.startDate,
                per.periodDTO.endDate, per.periodDTO.name)
        }

        // periodsBeforeEdition is updated with the DB
        periodsBeforeEdition = periodState;
    }

    const setNewItemId = (firestoreId, generatedId) => {
        var foundIndex = periodState.findIndex(per => per.id === generatedId);
        const elements = [...periodState];
        elements[foundIndex].id = firestoreId;
        setPeriodState(elements);
    }

        // add an empty period to the list
        const addNewPeriod = () => {
            const newPeriod = new PeriodWithId(addedItemsCount, new PeriodDTO("nouveau", "", ""));
            const elements = periodState;
            elements.unshift(newPeriod)
            setPeriodState(elements);
            addedItemsCount++;
        }

    const renderPeriods = (periods, isEditable) => {
        return periods
            .sort((a, b) => new Date(a.periodDTO.endDate) - new Date(b.periodDTO.endDate))
            .map((per) => (
                <Period key={per.id} period={per} isEditable={isEditable} updatePeriodList={updatePeriodsList}></Period>
            ))
    }

    const renderAdd = () => {
        return (
            <AddPeriod />
        );
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='middle_section' title='Périodes' renderItems={renderPeriods} addNewItem={addNewPeriod}
                items={periods} submitModifications={updatePeriodsInDB}></GenericForm>
        </div>
    );
}

export default PeriodsForm