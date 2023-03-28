import React, { useState, useEffect } from 'react'
import SectionHeader from '../SectionHeader'
import BeliefPopUpContent from './BeliefPopUpContent'
import { ReligionDAO } from "../../../DAL/ReligionDAO"
import { ValueDAO } from "../../../DAL/ValueDAO";
import { PracticeDAO } from "../../../DAL/PracticeDAO";
import { ResidentDAO } from "../../../DAL/ResidentDAO"
import { ReligionWithId } from '../../../DTO/ReligionWithId';
import Religion from './Religion';
import { ReligionDTO } from '../../../DTO/ReligionDTO';

function BeliefsList() {

    useEffect(() => {
        fetchBeliefs();
    }, []);

    const [resident, setResident] = useState(null)
    const [allReligions, setAllReligions] = useState([]);
    const [allValues, setvalueState] = useState([]);
    const [allPractices, setpracticeState] = useState([]);

    const fetchBeliefs = async () => {
        const res = await ResidentDAO.prototype.getresidentById(localStorage.getItem("residentId"));
        setResident(res);
        
        setvalueState(await ValueDAO.prototype.getAllValues());
        setpracticeState(await PracticeDAO.prototype.getAllPractices());
        setAllReligions(await ReligionDAO.prototype.getAllReligions());
    }

    return (
        <div className="croyances">
            <SectionHeader popupContent={
                <BeliefPopUpContent
                    resident={resident}
                    allValues={allValues}
                    allPractices={allPractices}
                    allReligions={allReligions}>
                </BeliefPopUpContent>}
                sectionTitle={"Croyances"}></SectionHeader>

            <div className="infos_list">
                <h4 className="categories">Religion</h4>
                <span className="infos_religion">
                {allReligions?.filter((r) => resident.religionId == r.id)
                    .map((p) =>
                        <p key={p.id} className="item">{p.religionDTO.name} &nbsp;</p>
                    )}
                   
                </span>

            </div>

            <div className="infos_list">
                <h4 className="categories">Pratique</h4>
                <span className="infos_religion">
                    {allPractices?.filter((pr) => resident.practiceIds.includes(pr.id))
                    .map((p) =>
                        <p key={p.id} className="item">{p.practiceDTO.name} &nbsp;</p>
                    )}
                </span>
                &nbsp; &nbsp;
            </div>

            <div className="infos_list">
                <h4 className="categories">Valeurs</h4>
                <span className="infos_religion">
                {allValues?.filter((va) => resident.valueIds.includes(va.id))
                    .map((v) =>
                        <p key={v.id} className="item">{v.valueDTO.name} &nbsp;</p>
                    )}
                </span>
                &nbsp; &nbsp;
            </div>
        </div>
    )
}

export default BeliefsList