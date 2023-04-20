import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import "../CSS/Information.css";
import "../fonts/LexendDeca.ttf";
import { BiPrinter } from "react-icons/bi";
import { TimelineWidget } from "./Timeline/Timeline";
import PreferencesList from "./Preferences/PreferencesList";
import PersonalInfos from "./PersonalInfos";
import BeliefsList from "./Beliefs/BeliefsList";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router";

function Information() {
  const infoRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const navigate = useNavigate();

  async function handlePrint() {
    window.scrollTo(0, 0);
    await html2canvas(infoRef.current, {
      useCORS: true,
      allowTaint: true,
      foreignObjectRendering: false,
    })
      .then((canvas) => {
        setImageData(canvas.toDataURL());
      })
      .then(() => {
        setTimeout(() => {
          window.print();
        });
      }, 1000);
    //reload after print
    window.onafterprint = function () {
      navigate("/reload");
    };
  }
  // function print() {
  //   window.print();
  //   window.onafterprint = function () {
  //     window.location.reload();
  //   };
  // }

  return (
    <>
      <div className="hideOnPrint" data-html2canvas-ignore>
        <Navbar />
      </div>

      <div>
        <BiPrinter
          onClick={() => handlePrint()}
          className="printButton"
        ></BiPrinter>
        <PersonalInfos></PersonalInfos>
      </div>

      <div className="container_infos">
        {/*<PassionsList></PassionsList>*/}
        <PreferencesList></PreferencesList>

        {/*<HabitsList></HabitsList>*/}
        <BeliefsList></BeliefsList>
      </div>
      <div className="evenements divTimelineWidget">
        {imageData ? (
          <img src={imageData} alt="Information" className="imageTimeline" />
        ) : (
          <div ref={infoRef}>
            <TimelineWidget />
          </div>
        )}
      </div>
    </>
  );
}

export default Information;
