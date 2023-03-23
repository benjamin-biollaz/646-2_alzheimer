import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import iconList from "@iconify-icons/icon-sets";

const IconPicker = ({ onSelect }) => {
  const handleClick = (icon) => {
    onSelect(icon);
  };

  return (
    <div>
      {iconList.map((icon, index) => (
        <div key={index} onClick={() => handleClick(icon)}>
          <Icon icon={icon} width="24" height="24" />
        </div>
      ))}
    </div>
  );
};

export default IconPicker;
