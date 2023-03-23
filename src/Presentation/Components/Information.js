import React, { useRef, useState } from "react";
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
import { useParams } from "react-router";
import PreferencesList from "./Preferences/PreferencesList";
import PassionsList from "./Passions/PassionsList";
import PersonalInfos from "./PersonalInfos";
import HabitsList from "./Habits/HabitsList";
import BeliefsList from "./Beliefs/BeliefsList";
import ReactToPrint from "react-to-print";
import moment from "moment";
import { DateFormatter } from "../../Utilities/DateFormatter";

function Information() {
  function MusicNoteIcon() {
    return <GiMusicalNotes />;
  }

  const resId = useParams().id;
  const componentRef = useRef();

  return (
    <>
      <div>
        <Navbar />
        
      </div>

      <div ref={componentRef}>
      <PersonalInfos></PersonalInfos>

      <div className="container_infos">

      <PassionsList></PassionsList> 
       <PreferencesList></PreferencesList>

        {/* //---------------- EVENTS ------------------// */}
        <div className="evenements">
          <h3 className="label">Évènements</h3>
          <div className="divTimelineWidget">
            <TimelineWidget id={resId} />
          </div>
        </div>
        
        <HabitsList></HabitsList>
        <BeliefsList></BeliefsList>

      </div>
      </div>
      <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => componentRef.current}
      />
    </>
  );
}

export default Information;
