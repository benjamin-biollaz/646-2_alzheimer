import React, { useEffect } from 'react';
import "../CSS/Home.css"

import { ResidentDAO } from '../../DAL/ResidentDAO';
import { async } from '@firebase/util';

export default function Home({ resident }) {


const residentDAO = new ResidentDAO();

const [residents, setResidents] = React.useState(null);


useEffect(() => {
   getResidents();
}, []);
  return (
    <div style={{ marginLeft: "10%", marginTop: "5%" }}>
      <h1 data-testid="1">Hello</h1>
      <h1 data-testid="2">{resident?.firstName}</h1>
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
                  <tr>
                    <td>{resident.firstName}</td>
                    <td>{resident.lastName}</td>
                    <td>{resident.birthDate.toDate().toDateString()}</td>
                    <td><button>Informations</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  );
  async function getResidents() {
    const res = await residentDAO.getResidents();
    setResidents(res);
  }

}
