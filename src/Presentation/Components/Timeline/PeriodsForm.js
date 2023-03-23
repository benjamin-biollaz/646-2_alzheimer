import React from 'react'
import { useContext } from 'react';
import GenericForm from '../Form/GenericForm';
import Period from './Period';
import {PeriodWithId} from '../../../DTO/PeriodWithId';
import {PeriodDAO} from '../../../DAL/PeriodDAO'
import AddPeriod from './AddPeriod';
import {ResidentContext} from '../../../Context/ResidentContext';

function PeriodsForm({periods}) {
    const context = useContext(ResidentContext);
     // those two collections store periods before/after modifications
    // to access database only if changes have been made
    var periodsBeforeEdition = [...periods];
    const periodsEdited = [...periods];

    // this functions is passed to the child to keep tack of changes
    const updatePeriodsList = (periodId, periodDTO) => {
        var foundIndex = periodsEdited.findIndex(p => p.id == periodId);
        periodsEdited[foundIndex] = new PeriodWithId(periodId, periodDTO);
    }

    const updatePeriodsInDB = () => {
        const periodDAO = new PeriodDAO();
        for (const per of periodsBeforeEdition) {
            // update each event
            const periodIndex = periodsEdited.findIndex(p => p.id == per.id)
            periodDAO.updatePeriod(context.residentId, per, periodsEdited[periodIndex].periodDTO.startDate, 
            periodsEdited[periodIndex].periodDTO.endDate, periodsEdited[periodIndex].periodDTO.name)
        }

        // periodsBeforeEdition is updated with the DB
        periodsBeforeEdition = periodsEdited;
    }

    const renderPeriods = (periods, isEditable) => {
        return periods
        .sort((a, b) => new Date(a.periodDTO.endDate) - new Date(b.periodDTO.endDate)) 
        .map((per) => (
           <Period key={per.id} period={per} isEditable={isEditable} updatePeriodList={updatePeriodsList}></Period>
        ))}

        const renderAdd = () => {
            return (
                <AddPeriod />
            );
        }

    return (
        <div className='flexDiv'>
           <GenericForm divId='periodsDiv' title='Périodes' renderItems={renderPeriods} renderAddForm={renderAdd}
            items={periods} submitModifications={updatePeriodsInDB}></GenericForm>
            </div>
    );
}

export default PeriodsForm