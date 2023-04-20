import React, { useEffect, useState } from "react";
import "../../CSS/Information.css";
import { PreferenceDAO } from "../../../DAL/PreferenceDAO";
import NestedHeader from "../NestedHeader";
import PrefPopUPContent from "./PrefPopUPContent";
import { IconManager } from "../../../Utilities/IconManager";


function PreferencesList() {

  const iconManager = new IconManager;

  // states for the preference categories
  const [prefAlimState, setPrefAlim] = useState(null);
  const [prefSleepState, setPrefSleep] = useState(null);
  const [prefHygieneState, setPrefHygiene] = useState(null);

  //read preferences from db during the first render
  useEffect(() => {
    getPreferencesList();
  }, []);

  function doRender() {
    window.location.reload(false);
  }

  // access db and set the lists in the state
  const getPreferencesList = async () => {
    const prefDAO = new PreferenceDAO();
    const pref = await prefDAO.getPreferencesByResidentId(
      localStorage.getItem("residentId")
    );
    setPrefAlim(pref.filter((p) => p.preferenceDTO.category == "Alimentation"));
    setPrefSleep(pref.filter((p) => p.preferenceDTO.category == "Sommeil"));
    setPrefHygiene(pref.filter((p) => p.preferenceDTO.category == "Hygiène"));
  };

  // renders a list of preferences as readonly
  const renderPreferences = (category, preferencesState) => {
    return (
      <div className="infos_list">
        {" "}
        <h4 className="categories">{category}</h4>
        <span className="infos_item">
          {preferencesState?.map((p) => (
            <span>
              <span className="icon-wrapper">
                {iconManager.getIconByName(p.preferenceDTO.iconName).icon}
              </span>
              {p.preferenceDTO.label}
            </span>
          ))}
        </span>
      </div>
    );
  };

  return (
    <div className="preferences">
      <NestedHeader
        onClose={getPreferencesList.bind(this)}
        sectionTitle={"Préférences"}
        popupContent={
          // popup content takes the three list as props
          <PrefPopUPContent
            prefAlim={prefAlimState}
            prefSleep={prefSleepState}
            prefHygiene={prefHygieneState}
          ></PrefPopUPContent>
        }
      ></NestedHeader>
      {
        // readonly preferences
        renderPreferences("Alimentation", prefAlimState)
      }
      {renderPreferences("Sommeil", prefSleepState)}
      {renderPreferences("Hygiène", prefHygieneState)}
    </div>
  );
}

export default PreferencesList;
