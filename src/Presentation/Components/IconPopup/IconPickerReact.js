import React, { useState } from "react";
import { IconContext } from "react-icons";
import "../../CSS/IconPicker.css";

import {
  FaPizzaSlice,
  FaCarrot,
  FaFish,
  FaCoffee,
  FaBeer,
  FaBath,
  FaChessKnight,
  FaMusic,
  FaSkiing,
  FaPumpSoap,
  FaPlaneDeparture,
} from "react-icons/fa";
import {
  GiShower,
  GiSoccerBall,
  GiBasketballBall,
  GiBread,
  GiBaseballBat,
  GiPeanut,
  GiHoneypot,
  GiPig,
  GiCow,
  GiTennisRacket,
  GiCurlingStone,
  GiCardAceHearts,
  GiMeal,
  GiMeat,
  GiFruitBowl,
  GiNoodles,
  GiWool,
  GiPaintBrush,
  GiSheep,
} from "react-icons/gi";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { TbYoga, TbMilk, TbTeapot, TbSalad } from "react-icons/tb";
import { MdPets, MdDirectionsRun } from "react-icons/md";
import { IoIosWine } from "react-icons/io";

const iconSets = [
  {
    name: "Nourriture",
    icons: [
      { name: "Noix / Arachide", icon: <GiPeanut /> },
      { name: "Miel / Confiture", icon: <GiHoneypot /> },
      { name: "Légumes", icon: <FaCarrot /> },
      { name: "Poisson", icon: <FaFish /> },
      { name: "Viande", icon: <GiMeat /> },
      { name: "Porc", icon: <GiPig /> },
      { name: "Boeuf", icon: <GiCow /> },
      { name: "Agneau", icon: <GiSheep /> },
      { name: "Salade", icon: <TbSalad /> },
      { name: "Fruit", icon: <GiFruitBowl /> },
      { name: "Soupe", icon: <GiNoodles /> },
      { name: "Pain", icon: <GiBread /> },
      { name: "Cafe", icon: <FaCoffee /> },
      { name: "Lait", icon: <TbMilk /> },
      { name: "Thé", icon: <TbTeapot /> },
      { name: "Vin", icon: <IoIosWine /> },
    ],
  },
  {
    name: "Préférences",
    icons: [
      { name: "Douche", icon: <GiShower /> },
      { name: "Bain", icon: <FaBath /> },
      { name: "Lever", icon: <BsFillSunriseFill /> },
      { name: "Coucher", icon: <BsFillSunsetFill /> },
      { name: "Lotion", icon: <FaPumpSoap /> },
      { name: "Souper", icon: <GiMeal /> },
    ],
  },
  {
    name: "Hobbies",
    icons: [
      { name: "Musique", icon: <FaMusic /> },
      { name: "Echec", icon: <FaChessKnight /> },
      { name: "Tricot", icon: <GiWool /> },
      { name: "Sport", icon: <GiSoccerBall /> },
      { name: "Yoga", icon: <TbYoga /> },
      { name: "Curling", icon: <GiCurlingStone /> },
      { name: "Peinture", icon: <GiPaintBrush /> },
      { name: "Jeux", icon: <GiCardAceHearts /> },
      { name: "Basketball", icon: <GiBasketballBall /> },
      { name: "Tennis", icon: <GiTennisRacket /> },
      { name: "Course", icon: <MdDirectionsRun /> },
      { name: "Ski", icon: <FaSkiing /> },
    ],
  },
  {
    name: "Intérêt",
    icons: [
      { name: "Animaux", icon: <MdPets /> },
      { name: "Voyager", icon: <FaPlaneDeparture /> },
    ],
  },
];

function IconPicker({ onSelect }) {
  const [activeSet, setActiveSet] = useState(iconSets[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    onSelect(icon.icon);
    setSelectedIcon(icon.icon);
    setSearchQuery("");
    console.log("Icon selected");
  };

  const handleSetChange = (set) => {
    setActiveSet(set);
  };

  return (
    <div className="icon-picker">
      <div className="icon-picker__sets">
        <div className="icon-picker__search">
          <input
            className="inputIcon"
            type="text"
            placeholder="Rechercher"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
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
          {activeSet.icons
            .filter((icon) =>
              icon.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((icon, index) => (
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
      {/* <div>
        {selectedIcon && (
          <div className="icon-picker__selected">
            <span className="icon-picker__selected-icon">{selectedIcon}</span>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default IconPicker;
