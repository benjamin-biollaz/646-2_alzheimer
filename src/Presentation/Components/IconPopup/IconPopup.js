import React, { useState } from "react";
import IconPicker from "../IconPickerReact";
import Popup from "reactjs-popup";

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
            <IconPicker onSelect={handleSelectIcon} />
            <button onClick={close}>Close</button>
          </div>
        )}
      </Popup>
      {selectedIcon && <div>Selected Icon: {selectedIcon}</div>}
    </div>
  );
}

export default IconPopup;
