import React, { useEffect, useState } from 'react'
import "../../CSS/Information.css";

import { GiFullPizza } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { TbCarrotOff } from "react-icons/tb";
import { TbPizzaOff } from "react-icons/tb";
import { TbFishOff } from "react-icons/tb";
import { FaBath } from "react-icons/fa";
import { GiShower } from "react-icons/gi";
import { PreferenceDAO } from '../../../DAL/PreferenceDAO';

function PreferencesList() {

    const [preferencesState, setPreferences] = useState([])

    useEffect(() => {
        getPreferencesList();
    }, []);

    const getPreferencesList = async () => {
        const prefDAO = new PreferenceDAO();
        setPreferences(await prefDAO.getPreferencesByResidentId("HvrELV7MRnnJcV24ro1w"));
    }

    return (
        <div className="preferences">
            <h3 className="label">Préférences</h3>
            <div>
                {preferencesState.map(p => {
                    <p key={p.label + p.iconName}></p>
                })}
            </div>
            <div className="infos_list">
                <h4 className="categories">Alimentation</h4>
                <span className="infos_item">
                    <div className="icon">
                        <GiFullPizza />
                    </div>
                </span>
                &nbsp; &nbsp;
                <span className="infos_item">
                    <div className="icon">
                        <p></p>
                        <GiNoodles />
                    </div>
                </span>
                &nbsp; &nbsp;
            </div>

            <div className="infos_list">
                {" "}
                <h4 className="categories">Hygiène</h4>
                <span className="infos_item">
                    <div className="icon">
                        <FaBath />
                    </div>
                </span>
                &nbsp; &nbsp; &nbsp;
                <span className="infos_item">
                    <div className="icon">
                        <GiShower />
                    </div>
                </span>
            </div>
        </div>
    )
}

export default PreferencesList