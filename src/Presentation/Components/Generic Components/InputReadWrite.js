import React, { useState } from 'react'

function InputReadWrite({ text, isEditable }) {

  const [isReadOnly, setReadOnly] = useState(isEditable);

  return (
    <div>
      {isReadOnly ?
        <p>Text</p>
        :
        <input>Input</input>
      }
    </div>
  )
}

export default InputReadWrite