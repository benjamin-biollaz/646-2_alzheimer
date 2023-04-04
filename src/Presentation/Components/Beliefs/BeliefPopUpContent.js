import React from 'react'
import PracticesForm from './PracticesForm'
import ReligionForm from './ReligionForm'
import ValuesForm from './ValuesForm'

/**
 * The content of the belief section pop up.
 */

function BeliefPopUpContent({ resident, allValues, allPractices, allReligions,
                            religionInputted, valuesInputted, practicesInputted }) {
    return (
        <div className='grid_container'>
            <ReligionForm allReligions={allReligions} residentReligionId={resident.religionId} religionInputted={religionInputted}></ReligionForm>
            <PracticesForm allPractices={allPractices} residentPracticesIds={resident.practiceIds} practicesInputted={practicesInputted}></PracticesForm>
            <ValuesForm allValues={allValues} residentValuesIds={resident.valueIds} valuesInputted={valuesInputted}></ValuesForm>
        </div>
    )
}

export default BeliefPopUpContent