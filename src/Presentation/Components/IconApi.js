import React, { useState } from "react";
import { FaStar, FaHeart, FaSmile, FaThumbsUp } from "react-icons/fa";

const IconPicker = ({ onSelect }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = (icon) => {
    onSelect(icon);
    setShowPopup(false);
  };

  return (
    <div className="icon-picker">
      <button onClick={() => setShowPopup(true)}>
        Select an icon <FaSmile />
      </button>
      {showPopup && (
        <div className="icon-picker-popup">
          <FaStar onClick={() => handleIconClick("star")} />
          <FaHeart onClick={() => handleIconClick("heart")} />
          <FaSmile onClick={() => handleIconClick("smile")} />
          <FaThumbsUp onClick={() => handleIconClick("thumbs-up")} />
        </div>
      )}
    </div>
  );
};

export default IconPicker;
