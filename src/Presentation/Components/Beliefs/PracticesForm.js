import React, { useState } from 'react'
import GenericForm from '../Form/GenericForm';
import { PracticeDAO } from "../../../DAL/PracticeDAO";
import Practice from './Practice';
import PracticeInput from './PracticeInput';
import { ResidentDAO } from '../../../DAL/ResidentDAO';

/**
 * This component renders a list of practices. 
 * Note that the display of indivual practice is handled in the "Practice" component.
 */
function PracticesForm({ allPractices, residentPracticesIds, practicesInputted }) {

    const [resPracticesIdsState, setPracticesIdsState] = useState([...residentPracticesIds])
    const [practiceInputtedState, setpracticeInputtedState] = useState([...practicesInputted])

    /*
    Default practices
    */

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
        const resId = localStorage.getItem("residentId");
        practiceDAO.assignPracticeToResident(resId, resPracticesIdsState); //default practices
        ResidentDAO.prototype.updateInputtedPractice(resId, practiceInputtedState); //inputted

    }

    const renderPractices = (practices, isEditable) => {
        return <span>

            {practices.map((pr) => (
                <Practice key={pr.id} practiceWithId={pr} isEditable={isEditable}
                    updatePracticesList={updatePracticesList} isInTheList={residentPracticesIds.includes(pr.id)}></Practice>
            ))}

            <div className='left_div'>
                {isEditable ? <h3>Autre</h3> : ""}
            </div>
            {practiceInputtedState.map((pr, index) => (
                <PracticeInput key={index} isEditable={isEditable} updatePracticesList={updatePracticesInputtedList}
                    practiceName={pr} isInTheList={practiceInputtedState.includes(pr)} removeFromList={removeInputtedPracticeFromList}></PracticeInput>
            ))}

        </span>
    }

    /*
    practices inputted
    */

    const removeInputtedPracticeFromList = (practice) => {
        const newPractices = [...practiceInputtedState];
        newPractices.splice(newPractices.indexOf(practice), 1);
        setpracticeInputtedState(newPractices);
    }

    const updatePracticesInputtedList = (oldString, newString) => {
        const i = practiceInputtedState.indexOf(oldString);
        const newPractices = [...practiceInputtedState];
        if (i === -1)
            newPractices.push(newString)
        else
            newPractices[newPractices.indexOf(oldString)] = newString;
        setpracticeInputtedState(newPractices);
    }

    const addNewPractice = () => {
        setpracticeInputtedState(prevPractices => [...prevPractices, "Nouveau"]);
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='middle_section' title='Pratiques'
                renderItems={renderPractices} items={allPractices}
                submitModifications={updatePracticesInDB}
                addNewItem={addNewPractice}></GenericForm>
        </div>
    );
}

export default PracticesForm