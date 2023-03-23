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
import PrefPopUPContent from './PrefPopUPContent';

function PreferencesList() {

    // states for the preference categories
    const [prefAlimState, setPrefAlim] = useState(null);
    const [prefSleepState, setPrefSleep] = useState(null);
    const [prefHygieneState, setPrefHygiene] = useState(null);

    //read preferences from db during the first render
    useEffect(() => {
        getPreferencesList();
    }, []);

    // access db and set the lists in the state
    const getPreferencesList = async () => {
        const prefDAO = new PreferenceDAO();
        const pref = await prefDAO.getPreferencesByResidentId("HvrELV7MRnnJcV24ro1w");
        setPrefAlim(pref.filter((p) => p.preferenceDTO.category == "Alimentation"));
        setPrefSleep(pref.filter((p) => p.preferenceDTO.category == "Sommeil"));
        setPrefHygiene(pref.filter((p) => p.preferenceDTO.category == "Hygiène"));

    }

    // renders a list of preferences as readonly
    const renderPreferences = (category, preferencesState) => {
        return (
            <div className="infos_list">
                {" "}
                <h4 className="categories">{category}</h4>
                <span className="infos_item">
                    {preferencesState?.map((p) =>
                        <Preference prefWithId={p} key={p.preferenceDTO.label + p.preferenceDTO.iconName}></Preference>
                    )}
                </span>
            </div>
        );
    }

    return (
        <div className="preferences">
            <SectionHeader sectionTitle={"Préférences"}
                popupContent={
                    // popup content takes the three list as props
                    <PrefPopUPContent
                        prefAlim={prefAlimState}
                        prefSleep={prefSleepState}
                        prefHygiene={prefHygieneState}>
                    </PrefPopUPContent>} >
            </SectionHeader>
            {
            // readonly preferences
            renderPreferences("Alimentation", prefAlimState)}
            {renderPreferences("Sommeil", prefSleepState)}
            {renderPreferences("Hygiène", prefHygieneState)}
        </div>
    )
}

export default PreferencesList