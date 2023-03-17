import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';
import Period from './Period';
import {PeriodWithId} from '../../../DTO/PeriodWithId';
import {PeriodDAO} from '../../../DAL/PeriodDAO'

function PeriodsForm({periods}) {
    
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
            periodDAO.updatePeriod('X9mfzXVODmuErhLMbrj3', per, periodsEdited[periodIndex].periodDTO.startDate, 
            periodsEdited[periodIndex].periodDTO.endDate, periodsEdited[periodIndex].periodDTO.name)
        }

        // periodsBeforeEdition is updated with the DB
        periodsBeforeEdition = periodsEdited;
    }

    const renderPeriods = (periods, isEditable) => {
        return periods.map((per) => (
           <Period key={per.id} period={per} isEditable={isEditable} updatePeriodList={updatePeriodsList}></Period>
        ))}

    return (
        <div className='flexDiv'>
           <GenericForm divId='periodsDiv' title='Periods' renderItems={renderPeriods}
            items={periods} submitModifications={updatePeriodsInDB}></GenericForm>
            </div>
    );
}

export default PeriodsForm