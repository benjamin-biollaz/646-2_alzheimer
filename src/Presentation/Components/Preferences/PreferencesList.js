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
import EditButton from "../Buttons/EditButton"
import Preference from './Preference';
import SectionHeader from '../SectionHeader';

function PreferencesList() {

    const [preferencesState, setPreferences] = useState(null)

    useEffect(() => {
        getPreferencesList();
    }, []);

    const getPreferencesList = async () => {
        const prefDAO = new PreferenceDAO();
        const pref = await prefDAO.getPreferencesByResidentId("HvrELV7MRnnJcV24ro1w");
        setPreferences(pref);
    }

    const renderFilteredPreferences = (category) => {
        return (
            <div className="infos_list">
                {" "}
                <h4 className="categories">{category}</h4>
                <span className="infos_item">
                    {preferencesState?.filter((pf) => pf.category == category).map((p) =>
                        <Preference preferenceDTO={p} key={p.label + p.iconName}></Preference>
                    )}
                </span>
            </div>
        );
    }

    return (
        <div className="preferences">
            <SectionHeader sectionTitle={"Préférences"}></SectionHeader>
            {renderFilteredPreferences("Alimentation")}
            {renderFilteredPreferences("Hygiène")}
            {renderFilteredPreferences("Sommeil")}
        </div>
    )
}

export default PreferencesList