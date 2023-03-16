import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';
import Period from './Period';

function PeriodsForm({periods}) {
    
    const renderPeriods = (periods, isEditable) => {
        return periods.map((per) => (
           <Period period={per} isEditable={isEditable}></Period>
        ))}

    return (
        <div className='flexDiv'>
           <GenericForm divId='periodsDiv' isEditable={false} title='Periods'
            renderItems={renderPeriods} items={periods}></GenericForm>
            </div>
    );
}

export default PeriodsForm