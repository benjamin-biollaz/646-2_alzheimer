import React from 'react'
import PreferencesForm from './PreferencesForm'


function PrefPopUPContent({ prefAlim, prefSleep, prefHygiene }) {

  return (
    <div className='grid_container'>
      <PreferencesForm preferences={prefAlim} category={"Alimentation"}></PreferencesForm>
      <PreferencesForm preferences={prefSleep} category={"Sommeil"}></PreferencesForm>
      <PreferencesForm preferences={prefHygiene} category={"Hygiène"}></PreferencesForm>
    </div>
  )
}

export default PrefPopUPContent