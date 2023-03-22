import React from 'react'
import { GiMusicalNotes } from "react-icons/gi";

function PassionsList() {
  return (
    <div className="passions">
          <h3 className="label">Passions</h3>
          <div className="infos_list">
            <span className="infos_item">
              Musique
              <div className="icon">
                <GiMusicalNotes />
              </div>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span className="infos_item">
              Poterie
              <div className="icon">
                <GiMusicalNotes />
              </div>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span className="infos_item">
              Tricot
              <div className="icon">
                <GiMusicalNotes />
              </div>
            </span>
          </div>
        </div>
  )
}

export default PassionsList