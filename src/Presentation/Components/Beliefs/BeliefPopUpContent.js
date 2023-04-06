import React from 'react'
import PracticesForm from './PracticesForm'
import ReligionForm from './ReligionForm'
import ValuesForm from './ValuesForm'

/**
 * The content of the belief section pop up.
 */

function BeliefPopUpContent({ resident, allValues, allPractices, allReligions}) {
    return (
        <div className='grid_container'>
            <ReligionForm allReligions={allReligions} residentReligionId={resident.religionId} religionInputted={resident.religionInputted}></ReligionForm>
            <PracticesForm allPractices={allPractices} residentPracticesIds={resident.practiceIds} practicesInputted={resident.practicesInputted}></PracticesForm>
            <ValuesForm allValues={allValues} residentValuesIds={resident.valueIds} valuesInputted={resident.valuesInputted}></ValuesForm>
        </div>
    )
}

export default BeliefPopUpContent