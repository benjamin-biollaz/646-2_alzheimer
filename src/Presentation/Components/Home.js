import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import { Link, useNavigate } from "react-router-dom";
import { ResidentDAO } from "../../DAL/ResidentDAO";
import moment from "moment";
import Popup from "reactjs-popup";
import swal from "sweetalert";
import { ResidentDTO } from "../../DTO/ResidentDTO";
import Navbar from "./Navbar";
import { NurseDAO } from "../../DAL/NurseDAO";
import { auth } from "../../DAL/FirebaseConf";
import { EstablishmentDAO } from "../../DAL/EstablishmentDAO";
import { BiSearch } from "react-icons/bi";

export default function Home() {
  const navigate = useNavigate();
  const residentDAO = new ResidentDAO();
  const [newRes, setResident] = React.useState(
    new ResidentDTO(
      "",
      "",
      "",
      [],
      [],
      [],
      "qSBOgadePITwLn1HYZbW",
      "",
      "",
      localStorage.getItem("establishmentId")
    )
  );
  const [residents, setResidents] = React.useState(null);
  const [establishment, setEstablishment] = React.useState(null);
  const [searchResidents, setSearchResidents] = useState("");

  const handleSearch = (event) => {
    setSearchResidents(event.target.value);
  };

  const filteredResidents = residents
    ? residents.filter(
      (resident) =>
        resident.firstName
          .toLowerCase()
          .includes(searchResidents.toLowerCase()) ||
        resident.lastName
          .toLowerCase()
          .includes(searchResidents.toLowerCase()) ||
        resident.birthDate
          .toLowerCase()
          .includes(searchResidents.toLowerCase())
    )
    : [];

  useEffect(() => {
    getResidents();
  }, []);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    setResident((prevState) => ({
      ...prevState,
      [fieldName]: value, //es6 computed property syntax
    }));
  };

  const addResident = async () => {
    if (
      newRes.firstName === "" ||
      newRes.lastName === "" ||
      newRes.birthDate === ""
    ) {
      swal("", "Veuillez remplir tous les champs", "error");
      return;
    }
    var r = await residentDAO.addResident(newRes);
    setContext(r.id, newRes);
    navigate("/infos");
  };

  const setContext = (id, resident) => {
    localStorage.setItem("residentId", id);
    localStorage.setItem("residentFirstName", resident.firstName);
    localStorage.setItem("residentLastName", resident.lastName);
    localStorage.setItem("residentBirthDate", resident.birthDate);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ marginLeft: "10%", marginTop: "15vh" }}>
        <h2>Liste des résidents au {establishment?.name}</h2>
        <div className="box">
          <div className="input-wrapper">
            <input
              type="text"
              className="input"
              name="txt"
              value={searchResidents}
              onChange={handleSearch}
            />
            <i>
              <BiSearch />
            </i>
          </div>
        </div>
        <table>
          <tbody>
            {filteredResidents.map((resident) => {
              return (
                <tr key={resident.id}>
                  <Link
                    id="link"
                    to={"/infos"}
                    onClick={() => setContext(resident.id, resident)}
                  >
                    <span className="data">{resident.firstName}</span>
                    <span className="data">{resident.lastName}</span>
                    <span className="data">
                      {moment(resident.birthDate).format("DD.MM.YYYY")}
                    </span>
                  </Link>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Popup trigger={<p id="popup_button">Ajouter un résident</p>}>
          <div id="my_popup">
            <label>Prénom</label>
            <input
              type="text"
              onChange={handleChange}
              name={"firstName"}
              value={newRes.firstName}
            />
            <label>Nom</label>
            <input
              type="text"
              onChange={handleChange}
              name={"lastName"}
              value={newRes.lastName}
            />
            <label>Date de naissance</label>
            <input
              type="date"
              onChange={handleChange}
              name={"birthDate"}
              value={newRes.birthDate}
            />
            <button id="add_button" onClick={addResident}>
              Ajouter
            </button>
          </div>
        </Popup>
      </div>
    </>
  );

  async function getResidents() {
    const nurse = await NurseDAO.prototype.getNurseById(auth.currentUser.uid);
    const establishment = await EstablishmentDAO.prototype.getEstablishmentById(
      nurse.establishmentId
    );
    const res = await residentDAO.getResidents(establishment.residentsId);
    setResidents(res);
    setEstablishment(establishment);
    localStorage.setItem("establishmentId", nurse.establishmentId);
  }
}
