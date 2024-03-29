import React from 'react'
import { useState } from 'react';
import GenericForm from '../Form/GenericForm';
import Period from './Period';
import { PeriodWithId } from '../../../DTO/PeriodWithId';
import { PeriodDAO } from '../../../DAL/PeriodDAO'
import { PeriodDTO } from '../../../DTO/PeriodDTO';
import Swal from 'sweetalert2';

function PeriodsForm({ periods }) {

    const [periodState, setPeriodState] = useState(periods);
    var addedItemsCount = 0; // used to generate ids

    // those two collections store periods before/after modifications
    // to access database only if changes have been made
    var periodsBeforeEdition = [...periods];

    // this functions is passed to the child to keep tack of changes
    const updatePeriodsList = (periodId, periodDTO) => {
        var foundIndex = periodState.findIndex(p => p.id === periodId);
        const elements = periodState;
        elements[foundIndex] = new PeriodWithId(periodId, periodDTO);
        setPeriodState(elements);
    }

    const updatePeriodsInDB = async () => {
        const periodDAO = new PeriodDAO();
        const timelineId = localStorage.getItem("timelineId");

        const periodsToDelete = periodsBeforeEdition.filter(
            (period) => !periodState.some((e) => e.id === period.id)
        );
        for (const period of periodsToDelete) {
            await periodDAO.deletePeriod(timelineId, period.id);
        }
        
        for (const per of periodState) {

            // the id of type int are the newly added one because Firestore
            // generates only String id
            if (typeof (per.id) === "number") {
                // add the new event
                console.log(per);   
                const newId = await periodDAO.addPeriod(timelineId, per.periodDTO.name, per.periodDTO.startDate,
                    per.periodDTO.endDate);
                setNewItemId(newId, per.id);
                continue;
            }

            // update each event
            const periodIndex = periodsBeforeEdition.findIndex(p => p.id === per.id)
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

    const deletePeriod = (periodId) => {
        const index = periodState.findIndex((period) => period.id === periodId);
        const newPeriods = [...periodState];
        newPeriods.splice(index, 1);
        setPeriodState(newPeriods);
        localStorage.setItem("update", true);
        Swal.fire(
            'Supprimé !',
            'La préférence a été supprimée.',
            'success',
            2000
          )
    }

    const renderPeriods = (periods, isEditable) => {
        return periods
            .sort((a, b) => new Date(a.periodDTO.endDate) - new Date(b.periodDTO.endDate))
            .map((per) => (
                <Period key={per.id} period={per} isEditable={isEditable} updatePeriodList={updatePeriodsList}
                deletePeriod={deletePeriod}></Period>
            ))
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='middle_section' title='Périodes' renderItems={renderPeriods} addNewItem={addNewPeriod}
                items={periodState} submitModifications={updatePeriodsInDB}></GenericForm>
        </div>
    );
}

export default PeriodsForm