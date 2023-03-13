import React from "react";
import Navbar from "./Navbar";
import "../CSS/Information.css";
import "../fonts/LexendDeca.ttf";
import { GiMusicalNotes } from "react-icons/gi";

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
        <span className="patient_name">Emilie Teodoro</span>
        &nbsp;
        <span className="patient_name">24 ans</span>
      </div>

      <div className="container_infos">
        <div className="passions">
          <h3 className="label">Passions</h3>
          <div className="passion_list">
            <span className="passion_item">
              Musique
              <div className="icon">
                <GiMusicalNotes />
              </div>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span className="passion_item">
              Poterie
              <div className="icon">
                <GiMusicalNotes />
              </div>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span className="passion_item">
              Tricot
              <div className="icon">
                <GiMusicalNotes />
              </div>
            </span>
          </div>
        </div>
        <div className="preferences">
          <h3 className="label">Préférences</h3>
        </div>
        <div className="evenements">
          <h3 className="label">Évènements</h3>
        </div>
        <div className="habitudes">
          <h3 className="label">Habitudes</h3>
        </div>
        <div className="croyances">
          <h3 className="label">Croyances</h3>
        </div>
      </div>
    </>
  );
}

export default Information;
