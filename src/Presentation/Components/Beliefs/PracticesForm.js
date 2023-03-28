import React, { useState } from 'react'
import GenericForm from '../Form/GenericForm';
import { PracticeDAO } from "../../../DAL/PracticeDAO";
import Practice from './Practice';

/**
 * This component renders a list of event. 
 * Note that the display of indivual event is handled in the "Event" component.
 */
function PracticesForm({ allPractices, residentPracticesIds }) {

    const [resPracticesIdsState, setPracticesIdsState] = useState(residentPracticesIds)


    // this functions is passed to the child to keep tack of changes
    const updatePracticesList = (practiceId, checked) => {
        const items = resPracticesIdsState;
        if (checked) {
            if (!resPracticesIdsState.includes(practiceId)) {
                items.push(practiceId);
                setPracticesIdsState(items);
            }
        } else {
            if (resPracticesIdsState.includes(practiceId)) {
                items.splice(items.indexOf(practiceId), 1);
                setPracticesIdsState(items);
            }
        }
    }

    const updatePracticesInDB = async () => {
        const practiceDAO = new PracticeDAO();
        practiceDAO.assignPracticeToResident(localStorage.getItem("residentId"), resPracticesIdsState);
    }

    const renderPractices = (practices, isEditable) => {
        return practices
            .map((pr) => (
                <Practice key={pr.id} practiceWithId={pr} isEditable={isEditable}
                    updatePracticesList={updatePracticesList} isInTheList={residentPracticesIds.includes(pr.id)}></Practice>
            ));
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='right_section' title='Pratiques'
                renderItems={renderPractices} items={allPractices}
                submitModifications={updatePracticesInDB}
                doNotDisplayAddButton={true}></GenericForm>
        </div>
    );
}

export default PracticesForm