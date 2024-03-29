import React, { useState } from "react";
import GenericForm from "../Form/GenericForm";
import Preference from "./Preference";
import { PreferenceDAO } from "../../../DAL/PreferenceDAO";
import { PreferenceWithId } from "../../../DTO/PreferenceWithId";
import { PreferenceDTO } from "../../../DTO/PreferenceDTO";
import Swal from 'sweetalert2';

/**
 * This components renders a list of preferences in a form.
 * Note that the display of indivual preference is handled in the "Preference" component.
 */
function PreferencesForm({ preferences, category }) {
  const [prefState, setPrefState] = useState(preferences);
  var addedItemsCount = 0; // used to generate ids

  // this collection stores preferences before
  // to access database only if changes have been made
  var preferencesBeforeEdition = [...preferences];

  // this functions is passed to the child to keep tack of changes
  const updatePrefList = (prefId, prefDTO) => {
    var foundIndex = prefState.findIndex((p) => p.id === prefId);
    const elements = prefState;
    elements[foundIndex] = new PreferenceWithId(prefId, prefDTO);
    setPrefState(elements);
  };

  // triggered when someone valdiate their changes
  const updatePreferencesInDB = async () => {
    const prefDAO = new PreferenceDAO();
    const residentId = localStorage.getItem("residentId");
    for (const pr of prefState) {
      // the id of type int are the newly added one because Firestore
      // generates only String id
      if (typeof pr.id === "number") {
        // add the new preference
        const newId = await prefDAO.addPreference(
          residentId,
          pr.preferenceDTO.label,
          pr.preferenceDTO.iconName,
          category
        );
        setNewItemId(newId, pr.id);
        continue;
      }

      // update each event
      const prefIndex = preferencesBeforeEdition.findIndex(
        (p) => p.id === pr.id
      );
      prefDAO.updatePreference(
        residentId,
        preferencesBeforeEdition[prefIndex],
        pr
      );
    }

    // preferencesBeforeEdition is updated with the DB
    preferencesBeforeEdition = [...prefState];
  };

  const setNewItemId = (firestoreId, generatedId) => {
    var foundIndex = prefState.findIndex((p) => p.id === generatedId);
    const elements = [...prefState];
    elements[foundIndex].id = firestoreId;
    setPrefState(elements);
  };

  // add an empty preference to the list
  const addNewPreference = () => {
    const newPref = new PreferenceWithId(
      addedItemsCount,
      new PreferenceDTO("nouveau", "Viande", category)
    );
    const elements = prefState;
    elements.unshift(newPref);
    setPrefState(elements);
    addedItemsCount++;
  };

  const renderPreferences = (pref, isEditable) => {
    return pref.map((pr) => (
      <Preference
        key={pr.id}
        prefWithId={pr}
        isEditable={isEditable}
        updatePrefList={updatePrefList}
        onDelete={deletePreference.bind(this, pr.id)}
      ></Preference>
    ));
  };
  //delete preference from the list and from the database if id is not empty
  const deletePreference = (id) => {
    const residentId = localStorage.getItem("residentId");
    const prefIndex = prefState.findIndex((p) => p.id === id);
    if (typeof id === "number") {
      // delete the new preference and rerender the list
      const elements = prefState;
      elements.splice(prefIndex, 1);
      setPrefState(elements);
      Swal.fire(
        'Supprimé !',
        'La préférence a été supprimée.',
        'success'
      );
      return;
    }
    delFromDB(residentId, id).then(() => {
      const elements = prefState;
      elements.splice(prefIndex, 1);
      setPrefState(elements);
      Swal.fire(
        'Supprimé !',
        'La préférence a été supprimée.',
        'success'
      );
      return;
    });
  };

  const delFromDB = async (residentId, id) => {
    const prefDAO = new PreferenceDAO();
    await prefDAO.deletePreference(residentId, id);
  }

  return (
    <div className="flexDiv">
      <GenericForm
        divId="left_section"
        title={category}
        renderItems={renderPreferences}
        items={prefState}
        submitModifications={updatePreferencesInDB}
        addNewItem={addNewPreference}
      ></GenericForm>
    </div>
  );
}

export default PreferencesForm;
