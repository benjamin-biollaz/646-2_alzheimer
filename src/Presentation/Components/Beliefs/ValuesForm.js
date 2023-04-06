import React, { useState } from 'react'
import GenericForm from '../Form/GenericForm';
import { ValueDAO } from "../../../DAL/ValueDAO";
import Value from './Value';
import ValueInput from './ValueInput';
import { ResidentDAO } from '../../../DAL/ResidentDAO';

/**
 * This component renders a list of values. 
 * Note that the display of indivual value is handled in the "Value" component.
 */
function ValuesForm({ allValues, residentValuesIds, valuesInputted }) {

    const [resValuesIdsState, setresValuesIdsState] = useState(residentValuesIds)
    const [valueInputtedState, setValueInputtedState] = useState([...valuesInputted])

    /*
   Default values
   */

    // this functions is passed to the child to keep tack of changes
    const updateValuesList = (valueId, checked) => {
        const items = resValuesIdsState;
        if (checked) {
            if (!resValuesIdsState.includes(valueId)) {
                items.push(valueId);
                setresValuesIdsState(items);
            }
        } else {
            if (resValuesIdsState.includes(valueId)) {
                items.splice(items.indexOf(valueId), 1);
                setresValuesIdsState(items);
            }
        }
    }

    const updateValuesInDB = async () => {
        const valueDAO = new ValueDAO();
        const resId = localStorage.getItem("residentId");
        valueDAO.assignValueToResident(resId, resValuesIdsState);
        ResidentDAO.prototype.updateInputtedValue(resId, valueInputtedState);
    }

    const renderValues = (values, isEditable) => {
        return <span>
            {values.map((va) => (
                <Value key={va.id} valueWithId={va} isEditable={isEditable}
                    updateValuesList={updateValuesList} isInTheList={residentValuesIds.includes(va.id)}></Value>
            ))}

            {/*Inputted practices */}
            {valueInputtedState.map((va, index) => (
                <ValueInput key={index} isEditable={isEditable} updateValuesList={updateValuesInputtedList}
                    valueName={va} isInTheList={valueInputtedState.includes(va)}
                    removeFromList={removeInputtedValuesFromList}></ValueInput>
            ))}
        </span>

    }

    /*
        values inputted
    */

    const removeInputtedValuesFromList = (practice) => {
        const newPractices = [...valueInputtedState];
        newPractices.splice(newPractices.indexOf(practice), 1);
        setValueInputtedState(newPractices);
    }

    const updateValuesInputtedList = (oldString, newString) => {
        const i = valueInputtedState.indexOf(oldString);
        const newValues = [...valueInputtedState];
        if (i === -1)
            newValues.push(newString)
        else
            newValues[newValues.indexOf(oldString)] = newString;
        setValueInputtedState(newValues);
    }

    const addNewValue = () => {
        setValueInputtedState(prevValues => [...prevValues, "Nouveau"]);
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='right_section' title='Valeurs'
                renderItems={renderValues} items={allValues}
                submitModifications={updateValuesInDB}
                addNewItem={addNewValue}></GenericForm>
        </div>
    );
}

export default ValuesForm