import React from 'react'
import PracticesForm from './PracticesForm'
import ReligionForm from './ReligionForm'
import ValuesForm from './ValuesForm'

function BeliefPopUpContent({ resident, allValues, allPractices, allReligions }) {
    return (
        <div className='grid_container'>
            <ReligionForm allReligions={allReligions} residentReligionId={resident.religionId}></ReligionForm>
            <PracticesForm allPractices={allPractices} residentPracticesIds={resident.practiceIds}></PracticesForm>
            <ValuesForm allValues={allValues} residentValuesIds={resident.valueIds}></ValuesForm>
        </div>
    )
}

export default BeliefPopUpContent