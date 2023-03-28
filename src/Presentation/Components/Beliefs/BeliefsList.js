import React, {useState, useEffect} from 'react'
import SectionHeader from '../SectionHeader'
import BeliefPopUpContent from './BeliefPopUpContent'
import {ReligionDAO} from "../../../DAL/ReligionDAO"
import {ValueDAO} from "../../../DAL/ValueDAO";
import {PracticeDAO} from "../../../DAL/PracticeDAO";
import {ResidentDAO} from "../../../DAL/ResidentDAO"
import { ReligionWithId } from '../../../DTO/ReligionWithId';

function BeliefsList() {

    const [religionState, setreligionState] = useState(null);
    const [valueState, setvalueState] = useState(null);
    const [practiceState, setpracticeState] = useState(null);

    useEffect(() => {
        fetchBeliefs();
    }, []);

    const fetchBeliefs = async () => {
        const res = await ResidentDAO.prototype.getresidentById(localStorage.getItem("residentId"));
        setReligion(res);
        setValues(res);
        setPractices(res);
    }

    const setReligion = async (res) => {
        const relDAO = new ReligionDAO();
        setreligionState(await relDAO.getReligionById(res.religionId));
    }

    const setValues = async (res) => {
        if (res.valueIds === null || res.valueIds === undefined){
            setvalueState([]) // empty values
            return;
        }
        const valDAO = new ValueDAO();
        setvalueState(await valDAO.getValuesByIds(res.valueIds)); // access db
    }

    const setPractices = async (res) => {
        const prDAO = new PracticeDAO();
        if (res.practiceIds === null || res.practiceIds === undefined) {
            setpracticeState([]); // empty practices
            return;
        }
        setpracticeState(prDAO.getPracticesByIds(res.practiceIds)); // access db
    }
    

    return (
        <div className="croyances">
            <SectionHeader popupContent={
            <BeliefPopUpContent></BeliefPopUpContent>} 
            sectionTitle={"Croyances"}></SectionHeader>

            <div className="infos_list">
                <h4 className="categories">Religion</h4>
                <span className="infos_religion">
                    <h4>Christianisme</h4>
                </span>
                &nbsp; &nbsp;
            </div>

            <div className="infos_list">
                <h4 className="categories">Pratique</h4>
                <span className="infos_religion">
                    <h4 className="item">Prière</h4>
                </span>
                &nbsp; &nbsp;
            </div>

            <div className="infos_list">
                <h4 className="categories">Valeurs</h4>
                <span className="infos_religion">
                    <h4>Respect</h4>
                </span>
                &nbsp; &nbsp;
            </div>
        </div>
    )
}

export default BeliefsList