import React, { useState } from "react";
import { IconContext } from "react-icons";
import "../CSS/IconPicker.css";

import {
  FaPizzaSlice,
  FaCarrot,
  FaFish,
  GiMeat,
  GiChickenOven,
  GiFruitBowl,
  FaCoffee,
  FaBeer,
  FaBath,
  FaChessKnight,
  FaMusic,
  FaGamepad,
  FaShower,
} from "react-icons/fa";
import {
  GiShower,
  GiSoccerBall,
  GiBasketballBall,
  GiBaseballBat,
  GiTennisRacket,
  GiWool,
  GiPaintBrush,
} from "react-icons/gi";
import { RiAlarmFill } from "react-icons/ri";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { MdFitnessCenter, MdPets, MdDirectionsRun } from "react-icons/md";
import "../CSS/IconPicker.css";

const iconSets = [
  {
    name: "Food",
    icons: [
      { name: "Pizza", icon: <FaPizzaSlice /> },
      { name: "Carrot", icon: <FaCarrot /> },
      { name: "Poisson", icon: <FaFish /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Beer", icon: <FaBeer /> },
    ],
  },
  {
    name: "Preferences",
    icons: [
      { name: "Douche", icon: <FaShower /> },
      { name: "Bain", icon: <FaBath /> },
      { name: "Lever", icon: <BsFillSunriseFill /> },
      { name: "Coucher", icon: <BsFillSunsetFill /> },
      { name: "Beer", icon: <FaBeer /> },
    ],
  },
  {
    name: "Hobbies",
    icons: [
      { name: "Music", icon: <FaMusic /> },
      { name: "Gaming", icon: <FaGamepad /> },
      { name: "Sports", icon: <GiSoccerBall /> },
      { name: "Basketball", icon: <GiBasketballBall /> },
      { name: "Baseball", icon: <GiBaseballBat /> },
      { name: "Tennis", icon: <GiTennisRacket /> },
      { name: "Fitness", icon: <MdFitnessCenter /> },
      { name: "Pets", icon: <MdPets /> },
      { name: "Running", icon: <MdDirectionsRun /> },
    ],
  },
];

function IconPicker({ onSelect }) {
  const [activeSet, setActiveSet] = useState(iconSets[0]);

  const handleSetChange = (set) => {
    setActiveSet(set);
  };

  const handleIconClick = (icon) => {
    onSelect(icon.icon);
  };

  return (
    <div className="icon-picker">
      <div className="icon-picker__sets">
        {iconSets.map((set, index) => (
          <button
            key={index}
            className={`icon-picker__set ${set === activeSet ? "active" : ""}`}
            onClick={() => handleSetChange(set)}
          >
            {set.name}
          </button>
        ))}
      </div>
      <div className="icon-picker__icons">
        <IconContext.Provider value={{ size: "30px" }}>
          {activeSet.icons.map((icon, index) => (
            <button
              key={index}
              className="icon-picker__icon"
              onClick={() => handleIconClick(icon)}
            >
              {icon.icon}
              <span className="icon-picker__icon-name">{icon.name}</span>
            </button>
          ))}
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default IconPicker;
