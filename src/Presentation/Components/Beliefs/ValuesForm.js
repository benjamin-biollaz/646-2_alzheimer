import React, { useState } from 'react'
import GenericForm from '../Form/GenericForm';
import { ValueDAO } from "../../../DAL/ValueDAO";
import { ValuesWithId } from '../../../DTO/ValuesWithId';
import { ValueDTO } from '../../../DTO/ValueDTO';
import Value from './Value';

/**
 * This component renders a list of event. 
 * Note that the display of indivual event is handled in the "Event" component.
 */
function ValuesForm({ allValues, residentValuesIds }) {

    const [resValuesIdsState, setresValuesIdsState] = useState(residentValuesIds)

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
        valueDAO.assignValueToResident(localStorage.getItem("residentId"), resValuesIdsState);
    }

    const renderValues = (values, isEditable) => {
        return values
            .map((va) => (
                <Value key={va.id} valueWithId={va} isEditable={isEditable}
                    updateValuesList={updateValuesList} isInTheList={residentValuesIds.includes(va.id)}></Value>
            ));
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='right_section' title='Valeurs'
                renderItems={renderValues} items={allValues}
                submitModifications={updateValuesInDB}
                doNotDisplayAddButton={true}></GenericForm>
        </div>
    );
}

export default ValuesForm