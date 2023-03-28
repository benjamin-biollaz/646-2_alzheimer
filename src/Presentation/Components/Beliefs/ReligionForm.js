import React, { useState } from 'react'
import GenericForm from '../Form/GenericForm';
import { ReligionDAO } from "../../../DAL/ReligionDAO";
import Religion from './Religion';

/**
 * This component renders the religion of a resident. 
 * Note that the display of indivual religion is handled in the "Religion" component.
 */
function ReligionForm({ allReligions, residentReligionId }) {

    const [resReligionIdState, setReligionIdState] = useState(residentReligionId)

    const updatePracticesInDB = async () => {
        const religionDAO = new ReligionDAO();
        religionDAO.assignReligionToResident(localStorage.getItem("residentId"), resReligionIdState);
    }

    const renderReligions = (religions, isEditable) => {
        return religions
            .map((r) => (
                <Religion key={r.id} religionWithId={r} isEditable={isEditable}
                    updateReligion={setReligionIdState} isSelected={resReligionIdState == r.id}></Religion>
            ));
    }

    console.log(resReligionIdState);

    return (
        <div className='flexDiv'>
            <GenericForm className='left_section' title='Religions'
                renderItems={renderReligions} items={allReligions}
                submitModifications={updatePracticesInDB}
                doNotDisplayAddButton={true}></GenericForm>
        </div>
    );
}

export default ReligionForm