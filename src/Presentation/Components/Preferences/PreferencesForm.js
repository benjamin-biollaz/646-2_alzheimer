import React from 'react'
import GenericForm from '../Form/GenericForm';
import Event from '../Timeline/Event';
import AddEvent from '../Timeline/AddEvent';
import { EventDAO } from '../../../DAL/EventDAO';
import { EventWithId } from '../../../DTO/EventWithId';
import Preference from './Preference';
import { PreferenceDAO } from '../../../DAL/PreferenceDAO';
import { PreferenceWithId } from '../../../DTO/PreferenceWithId';

/**
 * This components renders a list of preferences in a form.
 * Note that the display of indivual preference is handled in the "Preference" component.
 */
function PreferencesForm({ preferences, category }) {

    // those two collections store preferences before/after modifications
    // to access database only if changes have been made
    var preferencesBeforeEdition = [...preferences];
    const preferencesEdited = [...preferences];

      // this functions is passed to the child to keep tack of changes
      const updatePrefList = (prefId, prefDTO) => {
        var foundIndex = preferencesEdited.findIndex(p => p.id === prefId);
        preferencesEdited[foundIndex] = new PreferenceWithId(prefId, prefDTO);
    }


    // triggered when someone valdiate their changes
    const updatePreferencesInDB = () => {
        const prefDAO = new PreferenceDAO();
        for (const pr of preferencesBeforeEdition) {
            const prefIndex = preferencesEdited.findIndex(p => p.id === pr.id)
            // update each event
            prefDAO.updatePreference("HvrELV7MRnnJcV24ro1w", pr, preferencesEdited[pr]);
        }

        // preferencesBeforeEdition is updated with the DB
        preferencesBeforeEdition = preferencesEdited;
    }


    const renderPreferences = (pref, isEditable) => {
        return pref.map((pr) => (
                <Preference key={pr.id} prefWithId={pr} isEditable={false} fabio={"fbio"}></Preference>
            ));
    }

    return (
        <div className='flexDiv'>
            <GenericForm divId='left_section' title={category}
                renderItems={renderPreferences} items={preferences}
                submitModifications={updatePreferencesInDB}></GenericForm>
        </div>
    );
}

export default PreferencesForm