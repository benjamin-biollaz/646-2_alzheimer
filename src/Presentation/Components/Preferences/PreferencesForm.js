import React from 'react'
import GenericForm from '../Form/GenericForm';
import Event from '../Timeline/Event';
import AddEvent from '../Timeline/AddEvent';
import { EventDAO } from '../../../DAL/EventDAO';
import { EventWithId } from '../../../DTO/EventWithId';
import Preference from './Preference';
import { PreferenceDAO } from '../../../DAL/PreferenceDAO';

/**
 * This components renders a list of preferences in a form.
 * Note that the display of indivual preference is handled in the "Preference" component.
 */
function PreferencesForm({ preferences, category }) {

    // those two collections store preferences before/after modifications
    // to access database only if changes have been made
    var preferencesBeforeEdition = [...preferences];
    const preferencesEdited = [...preferences];

    // triggered when someone valdiate their changes
    const updatePreferencesInDB = () => {
        const prefDAO = new PreferenceDAO();
        for (const pr of preferencesBeforeEdition) {
            // update each event
           
        }

        // preferencesBeforeEdition is updated with the DB
        preferencesBeforeEdition = preferencesEdited;
    }

    const renderPreferences = (pref, isEditable) => {
        return pref
            .map((pr) => (
                <Preference key={pr.id} preferenceDTO={pr} isEditable={isEditable}></Preference>
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