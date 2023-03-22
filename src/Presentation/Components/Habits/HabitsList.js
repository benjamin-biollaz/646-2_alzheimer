import React from 'react'
import { GiNightSleep } from "react-icons/gi";
import { BsFillSunriseFill, BsSunriseFill } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";
import { TfiTimer } from "react-icons/tfi";

function HabitsList() {
    return (
        <div className="habitudes">
            <h3 className="label">Habitudes</h3>
            <div className="habitudes_grid">
                <div className="infos_list">
                    {" "}
                    <h4 className="categories_1">Lever</h4>
                    <span className="infos_item">
                        <div className="icon">
                            <BsSunriseFill />
                        </div>
                    </span>
                </div>

                <div className="infos_list">
                    {" "}
                    <h4 className="categories_2">Coucher</h4>
                    <span className="infos_item">
                        <div className="icon">
                            <GiNightSleep />
                        </div>
                    </span>
                </div>

                <div className="infos_list">
                    {" "}
                    <h4 className="categories_3">Souper</h4>
                    <span className="infos_item">
                        <div className="icon">
                            <GiMeal />
                        </div>
                    </span>
                </div>

                <div className="infos_list">
                    {" "}
                    <h4 className="categories_4">Sieste</h4>
                    <span className="infos_item">
                        <div className="icon">
                            <TfiTimer />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HabitsList