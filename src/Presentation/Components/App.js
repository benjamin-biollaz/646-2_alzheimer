import '../CSS/App.css';
import React, {useEffect} from "react";
import Home from './Home.js';
import { ResidentDAO } from "../../DAL/ResidentDAO";
import { ResidentDTO } from "../../DTO/ResidentDTO";

function App() {
  const [resident, setResident] = React.useState(null);

    useEffect(() => {
        getResident();
    }, []);

  return (
    <div className="App">
      <Home resident={resident}/>
    </div>
  );

  async function getResident() {
    const res = await ResidentDAO.prototype.getresidentById("HvrELV7MRnnJcV24ro1w");
    setResident(res);
}
}

export default App;