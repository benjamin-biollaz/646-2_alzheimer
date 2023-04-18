import React, {useEffect} from 'react'
import { useNavigate } from 'react-router'

function Reload() {

const nav = useNavigate();

useEffect(() => {
    nav('/infos')
}, [])
  return (
    <div>Loading ...</div>
  )
}

export default Reload