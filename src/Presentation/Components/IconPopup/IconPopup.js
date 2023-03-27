import React, { useState } from "react";
import IconPicker from "./IconPickerReact";
import { IconContext } from "react-icons";
import Popup from "reactjs-popup";
import { AiFillCloseCircle } from "react-icons/ai";

function IconPopup() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleSelectIcon = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div>
      <Popup trigger={<button>Open IconPicker</button>} modal>
        {(close) => (
          <div className="icon-picker-popup">
            <IconContext.Provider value={{ size: "25px", color: "#a78a7f" }}>
              <AiFillCloseCircle onClick={close} />
            </IconContext.Provider>
            <IconPicker onSelect={handleSelectIcon} />
          </div>
        )}
      </Popup>
      {selectedIcon && <div>Selected Icon: {selectedIcon}</div>}
    </div>
  );
}

export default IconPopup;
