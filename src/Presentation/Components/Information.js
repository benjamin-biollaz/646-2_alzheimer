import React from "react";
import Navbar from "./Navbar";
import "../CSS/Information.css";
import "../fonts/LexendDeca.ttf";
import { GiMusicalNotes } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { TbCarrotOff } from "react-icons/tb";
import { TbPizzaOff } from "react-icons/tb";
import { TbFishOff } from "react-icons/tb";
import { FaBath } from "react-icons/fa";
import { GiShower } from "react-icons/gi";
import { GiNightSleep } from "react-icons/gi";
import { BsFillSunriseFill, BsSunriseFill } from "react-icons/bs";
import { TfiTimer } from "react-icons/tfi";
import { GiMeal } from "react-icons/gi";
import { TimelineWidget } from "./Timeline/Timeline";
import { FaWheelchair } from "react-icons/fa";

function Information() {
  function MusicNoteIcon() {
    return <GiMusicalNotes />;
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="personal_infos">
        <span>Emilie Teodoro</span>
        &nbsp;
        <span>24 ans</span>
        &nbsp;
      </div>
      <span className="moyens_aux">
        Moyens auxiliaire :
        <span className="icon_aux">
          {" "}
          <FaWheelchair />
        </span>
      </span>
      <span className="pictures_container">
        <span className="patient_picture">{/* Insert picture here... */}</span>
      </span>
      &nbsp;
      <div className="container_infos">
        <div className="passions">
          <h3 className="label">Passions</h3>
          <div className="infos_list">
            <span className="infos_item">
              Musique
              <div className="icon_passion">
                <GiMusicalNotes />
              </div>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span className="infos_item">
              Poterie
              <div className="icon_passion">
                <GiMusicalNotes />
              </div>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span className="infos_item">
              Tricot
              <div className="icon_passion">
                <GiMusicalNotes />
              </div>
            </span>
          </div>
        </div>
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
        {/* //---------------- EVENTS ------------------// */}
        <div className="evenements">
          <h3 className="label">Évènements</h3>
          <div className="divTimelineWidget">
            <TimelineWidget />
          </div>
        </div>

        {/* //---------------- HABITUDES ------------------// */}
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

        <div className="croyances">
          <h3 className="label">Croyances</h3>

          <div className="infos_list">
            <h4 className="categories">Religion</h4>
            <span className="infos_religion">
              <h4 className="religion_item">Christianisme</h4>
            </span>
            &nbsp; &nbsp;
          </div>

          <div className="infos_list">
            <h4 className="categories">Pratique</h4>
            <span className="infos_religion">
              <h4 className="religion_item">Prière</h4>
            </span>
            &nbsp; &nbsp;
          </div>

          <div className="infos_list">
            <h4 className="categories">Valeurs</h4>
            <span className="infos_religion">
              <h4 className="religion_item">Respect</h4>
            </span>
            &nbsp; &nbsp;
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
