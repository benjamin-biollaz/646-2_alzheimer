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

    return (
        <div className="preferences">
            <h3 className="label">Préférences</h3>

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
                        <GiNoodles />
                    </div>
                </span>
                &nbsp; &nbsp;
                <span className="infos_item">
                    <div className="icon">
                        <GiNoodles />
                    </div>
                </span>
                &nbsp; &nbsp;
                <span className="infos_item">
                    <div className="icon">
                        <TbCarrotOff />
                    </div>
                </span>
                &nbsp; &nbsp; &nbsp;
                <span className="infos_item">
                    <div className="icon">
                        <TbPizzaOff />
                    </div>
                </span>
                &nbsp; &nbsp;
                <span className="infos_item">
                    <div className="icon">
                        <TbFishOff />
                    </div>
                </span>
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