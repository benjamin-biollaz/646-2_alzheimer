import React from 'react'
import GenericForm from '../Form/GenericForm';
import Event from '../Timeline/Event';
import AddEvent from '../Timeline/AddEvent';
import { EventDAO } from '../../../DAL/EventDAO';
import { EventWithId } from '../../../DTO/EventWithId';
import Preference from './Preference';

/**
 * This components renders a list of preferences in a form.
 * Note that the display of indivual preference is handled in the "Preference" component.
 */
function PreferencesForm({ preferences, category }) {

    const renderPreferences = (pref, isEditable) => {
        return pref
        .map((pr) => (
            <Preference key={pr.id} preferenceDTO={pr} isEditable={isEditable}></Preference>
        ));
    }

    return (
        <div className='flexDiv'>
            <GenericForm divId='left_section' title={category}
                renderItems={renderPreferences} items={preferences} ></GenericForm>
        </div>
    );
}

export default PreferencesForm