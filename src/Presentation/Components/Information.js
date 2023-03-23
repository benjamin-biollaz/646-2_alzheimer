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
import { useParams } from "react-router";
import PreferencesList from "./Preferences/PreferencesList";
import PassionsList from "./Passions/PassionsList";
import PersonalInfos from "./PersonalInfos";
import HabitsList from "./Habits/HabitsList";
import BeliefsList from "./Beliefs/BeliefsList";
import SectionHeader from "./SectionHeader";

function Information() {
  function MusicNoteIcon() {
    return <GiMusicalNotes />;
  }

  return (
    <>
      <div>
        <Navbar />
      </div>

      <PersonalInfos></PersonalInfos>

      <div className="container_infos">

      <PassionsList></PassionsList> 
       <PreferencesList></PreferencesList>

        {/* //---------------- EVENTS ------------------// */}
        <TimelineWidget/>
        
        <HabitsList></HabitsList>
        <BeliefsList></BeliefsList>

      </div>
    </>
  );
}

export default Information;
