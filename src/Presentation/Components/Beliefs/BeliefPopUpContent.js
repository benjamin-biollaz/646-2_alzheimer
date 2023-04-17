import React from 'react'
import PracticesForm from './PracticesForm'
import ReligionForm from './ReligionForm'
import ValuesForm from './ValuesForm'

/**
 * The content of the belief section pop up.
 */

function BeliefPopUpContent({ resident, allValues, allPractices, allReligions}) {
    
    const practicesIn = Array.isArray(resident.practicesInputted) ? resident.practicesInputted : [];
    const valuesIn = Array.isArray(resident.valuesInputted) ? resident.valuesInputted : [];
    
    return (
        <div className='grid_container'>
            <ReligionForm allReligions={allReligions} residentReligionId={resident.religionId} religionInputted={resident.religionInputted}></ReligionForm>
            <PracticesForm allPractices={allPractices} residentPracticesIds={resident.practiceIds} practicesInputted={practicesIn}></PracticesForm>
            <ValuesForm allValues={allValues} residentValuesIds={resident.valueIds} valuesInputted={valuesIn}></ValuesForm>
        </div>
    )
}

export default BeliefPopUpContent