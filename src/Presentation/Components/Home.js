import React, { useEffect, useContext } from 'react';
import "../CSS/Home.css"
import { Link, useNavigate } from "react-router-dom";
import { ResidentDAO } from '../../DAL/ResidentDAO';
import moment from 'moment';
import Popup from 'reactjs-popup';
import { ResidentDTO } from '../../DTO/ResidentDTO';
import Navbar from './Navbar';
import { ResidentContext } from '../../Context/ResidentContext';
import logout from "../Components/Login/Logout";
import { margin } from '@mui/system';

export default function Home() {

  const navigate = useNavigate();
  const context = useContext(ResidentContext);
  const residentDAO = new ResidentDAO();
  const [newRes, setResident] = React.useState(new ResidentDTO('', '', '', null, [], []));
  const [residents, setResidents] = React.useState(null);

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
    }))
  }

  const addResident = async () => {
    if (newRes.firstName === '' || newRes.lastName === '' || newRes.birthDate === '') {
      alert("Veuillez remplir tous les champs");
      return;
    }
    var r = await residentDAO.addResident(newRes);
    console.log(r.id);
    window.location.href = `/infos/${r.id}`;
  }

  const navigateLogout = () => {
    navigate('/logout');
  }

  const setContext = (id, resident) => {
    localStorage.setItem('residentId', id);
    localStorage.setItem('residentFirstName', resident.firstName);
    localStorage.setItem('residentLastName', resident.lastName);
    localStorage.setItem('residentBirthDate', resident.birthDate);
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ marginLeft: "10%", marginTop: "5%" }}>
        <table>
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Date de Naissance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              residents?.map((resident) => {
                return (
                  <tr key={resident.id}>
                    <td>{resident.firstName}</td>
                    <td>{resident.lastName}</td>
                    <td>{moment(resident.birthDate).format("DD MM YYYY")}</td>
                    <td><Link to={`/infos`} onClick={() => setContext(resident.id, resident)}><button>Infos</button></Link></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <Popup trigger={<button>Ajouter un résident</button>}>
          <div>
            <label>Prénom</label>
            <input type="text" onChange={handleChange} name={'firstName'} value={newRes.firstName} />
            <label>Nom</label>
            <input type="text" onChange={handleChange} name={'lastName'} value={newRes.lastName} />
            <label>Date de naissance</label>
            <input type="date" onChange={handleChange} name={'birthDate'} value={newRes.birthDate} />
            <button onClick={addResident}>Ajouter</button>
          </div>
        </Popup>
        <div>
          <button style={{ marginTop: "100px" }} onClick={navigateLogout}>Se déconnecter</button>
        </div>

      </div>
    </>
  );
  async function getResidents() {
    const res = await residentDAO.getResidents();
    setResidents(res);
  }

}
