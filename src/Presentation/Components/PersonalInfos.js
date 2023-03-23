import moment from 'moment';
import React, {useContext} from 'react'
import {ResidentContext} from '../../Context/ResidentContext';


function PersonalInfos(resident) {
    const context = useContext(ResidentContext);
    const age = moment().diff(context.resident.birthDate, 'years');
    return (
        <div className="personal_infos">
            <span className="patient_name">{context.resident.firstName+" "+context.resident.lastName}</span>
            &nbsp; - &nbsp;
            <span className="patient_name">{age} ans</span>
        
       </div>
    )
}

export default PersonalInfos