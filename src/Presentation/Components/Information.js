import React from "react";
import Navbar from "./Navbar";
import "../CSS/Information.css";
import Content1 from "./Grid_components/Content1";
import Content2 from "./Grid_components/Content2";
import Content3 from "./Grid_components/Content3";
import Content4 from "./Grid_components/Content4";
import Content5 from "./Grid_components/Content5";
import Content6 from "./Grid_components/Content6";
import Content7 from "./Grid_components/Content7";
import Content8 from "./Grid_components/Content8";

function Information() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="personal_infos">
        <span className="patient_name">Emilie Teodoro</span>
        <span className="patient_name">24 ans</span>
      </div>
      <section>
        <div className="layout text-2xl text-white">
          <div className="content1 centered">
            <Content1 />
          </div>
          <div className="content2 centered">
            <Content2 />
          </div>
          <div className="content3 centered">
            <Content3 />
          </div>

          <div className="content4 centered">
            <Content4 />
          </div>
          {/* <div className="content5 centered">
            <Content5 />
          </div>
          <div className="content6 centered">
            <Content6 />
          </div>

          <div className="content7 centered">
            <Content7 />
          </div>
          <div className="content8 centered">
            <Content8 />
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Information;
