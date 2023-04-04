import React, { useState } from 'react'
import GenericForm from '../Form/GenericForm';
import { ReligionDAO } from "../../../DAL/ReligionDAO";
import Religion from './Religion';
import ReligionInput from './ReligionInput'
import { ResidentDAO } from '../../../DAL/ResidentDAO';

/**
 * This component renders the religion of a resident. 
 * Note that the display of indivual religion is handled in the "Religion" component.
 */
function ReligionForm({ allReligions, residentReligionId, religionInputted }) {

    // if the religionId is empty, it means the religion selected is the one inputted
    const [resReligionIdState, setReligionIdState] = useState(residentReligionId === "" ? religionInputted : residentReligionId)

    const updateReligionsInDB = async () => {
        const religionDAO = new ReligionDAO();
        const resId = localStorage.getItem("residentId");
        if (allReligions.some(r => r.id === resReligionIdState)) {
            //empty inputted religion, set religion reference
            religionDAO.assignReligionToResident(resId, resReligionIdState);
            ResidentDAO.prototype.updateInputtedReligion(resId, "");
        } else {
            // empty religion reference, set inputted religion 
            religionDAO.assignReligionToResident(resId, "");
            ResidentDAO.prototype.updateInputtedReligion(resId, resReligionIdState);
        }
    }

    const renderReligions = (religions, isEditable) => {
        return <div>
            {religions
                .map((r) => (
                    <Religion key={r.id} religionWithId={r} isEditable={isEditable}
                        updateReligion={setReligionIdState} isSelected={resReligionIdState == r.id}
                    ></Religion>
                ))}
            {/* To enter a religion that doesn't figure in the list */}
            <ReligionInput key={religionInputted} isEditable={isEditable}
                isSelected={!allReligions.some(r => r.id === resReligionIdState)}
                religionName={resReligionIdState} updateReligion={setReligionIdState}></ReligionInput>
        </div>
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='left_section' title='Religions'
                renderItems={renderReligions} items={allReligions}
                submitModifications={updateReligionsInDB}
                doNotDisplayAddButton={true}></GenericForm>
        </div>
    );
}

export default ReligionForm