import React from 'react'
import PracticesForm from './PracticesForm'
import ValuesForm from './ValuesForm'

function BeliefPopUpContent({ resident, allValues, allPractices, allReligions }) {
    return (
        <div className='grid_container'>
            <ValuesForm allValues={allValues} residentValuesIds={resident.valueIds}></ValuesForm>
            <PracticesForm allPractices={allPractices} residentPracticesIds={resident.practiceIds}></PracticesForm>
        </div>
    )
}

export default BeliefPopUpContent