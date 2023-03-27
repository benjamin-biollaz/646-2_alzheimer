import React from 'react';
import Navbar from "./Navbar";
import "../CSS/Information.css";
import "../fonts/LexendDeca.ttf";
import { GiMusicalNotes } from "react-icons/gi";
import { TimelineWidget } from "./Timeline/Timeline";
import PreferencesList from "./Preferences/PreferencesList";
import PassionsList from "./Passions/PassionsList";
import PersonalInfos from "./PersonalInfos";
import HabitsList from "./Habits/HabitsList";
import BeliefsList from "./Beliefs/BeliefsList";

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

      <div className="container_timeline">

        {/*<PassionsList></PassionsList>
        <PreferencesList></PreferencesList>*/}

        {/* //---------------- EVENTS ------------------// */}
        <TimelineWidget />

        {/*<HabitsList></HabitsList>
        <BeliefsList></BeliefsList>*/}

      </div>
    </>
  );
}

export default Information;
