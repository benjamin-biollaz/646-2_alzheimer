import React, { useRef, useState } from 'react';
import Navbar from "./Navbar";
import "../CSS/Information.css";
import "../fonts/LexendDeca.ttf";
import { GiMusicalNotes } from "react-icons/gi";
import { BiPrinter } from "react-icons/bi";
import { TimelineWidget } from "./Timeline/Timeline";
import PreferencesList from "./Preferences/PreferencesList";
import PassionsList from "./Passions/PassionsList";
import PersonalInfos from "./PersonalInfos";
import HabitsList from "./Habits/HabitsList";
import BeliefsList from "./Beliefs/BeliefsList";
import html2canvas from "html2canvas";


function Information() {
  function MusicNoteIcon() {
    return <GiMusicalNotes />;
  }
  const infoRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  async function handlePrint() {
    window.scrollTo(0,0);
    await html2canvas(infoRef.current,{
      useCORS: true,
      allowTaint: true,
      foreignObjectRendering: false,
    }).then((canvas) => {
      setImageData(canvas.toDataURL());
    }).then(() => {
        setTimeout(() => {
          window.print();
          });
        }, 1000);
      //reload after print
      window.onafterprint = function() {
        window.location.reload();
      };
    };
    
  
  
  return (
    <div>
      <div className="hideOnPrint" data-html2canvas-ignore>
          <Navbar />
          
        </div>
      <div className="divMain">
        
      <BiPrinter onClick={() => handlePrint()} className="printButton"></BiPrinter>
        <div>
          <PersonalInfos></PersonalInfos>

          <div className="container_infos">

        <PassionsList></PassionsList>
        <PreferencesList></PreferencesList>

        
              <div className="evenements">
                <h3 className="label">Évènements</h3>
                {imageData ? (
      <img src={imageData} alt="Information" className="divTimelineWidget"/>
      ) : (
                    <div className="divTimelineWidget" ref={infoRef}>
                      <TimelineWidget/>
                    </div>
      )}
          </div>
            <HabitsList></HabitsList>
            <BeliefsList></BeliefsList>

      </div>
      </div>
      
    </div>
    </div>
  );
}
  


export default Information;
