import React from "react";
import ButtonLogin from "./ButtonLogin";
import "../CSS/Login.css";
import logo from "../img/logo_memorys.png";

function Login() {
  return (
    <>
      <div className="div_img">
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="584"
          height="677"
          fill="max"
          viewBox="0 0 584 832"
        >
          <path
            fill="#A78A7F"
            fill-opacity=".86"
            d="M1197.2 559.412c0 283.907-211.331 514.058-472.022 514.058C-318.715 1399.91-1.3 570.913 249.683 485.5c-99.631-472.408 394.751-141.161 165-544.5C675.374-59 1197.2 275.505 1197.2 559.412Z"
          />
        </svg>
        <img className="logo_memorys" src={logo} alt="logo"></img>
      </div>
      <div className="login">
        <div className="login_container">
          <input className="login_input" placeholder="Username"></input>
          <input className="login_input" placeholder="Password"></input>
          <div className="btn_container">
            <ButtonLogin label={"Login"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

// {/* <div class="checkbox-wrapper-54">
//   <label class="switch">
//     <input type="checkbox">
//     <span class="slider"></span>
//   </label>
// </div>

//   .checkbox-wrapper-54 input[type="checkbox"] {
//     visibility: hidden;
//     display: none;
//   }

//   .checkbox-wrapper-54 *,
//   .checkbox-wrapper-54 ::after,
//   .checkbox-wrapper-54 ::before {
//     box-sizing: border-box;
//   }

//   /* The switch - the box around the slider */
//   .checkbox-wrapper-54 .switch {
//     --width-of-switch: 3.5em;
//     --height-of-switch: 2em;
//     /* size of sliding icon -- sun and moon */
//     --size-of-icon: 1.4em;
//     /* it is like a inline-padding of switch */
//     --slider-offset: 0.3em;
//     position: relative;
//     width: var(--width-of-switch);
//     height: var(--height-of-switch);
//     display: inline-block;
//   }

//   /* The slider */
//   .checkbox-wrapper-54 .slider {
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #f4f4f5;
//     transition: .4s;
//     border-radius: 30px;
//   }

//   .checkbox-wrapper-54 .slider:before {
//     position: absolute;
//     content: "";
//     height: var(--size-of-icon,1.4em);
//     width: var(--size-of-icon,1.4em);
//     border-radius: 20px;
//     left: var(--slider-offset,0.3em);
//     top: 50%;
//     transform: translateY(-50%);
//     background: linear-gradient(40deg,#ff0080,#ff8c00 70%);
//     ;
//    transition: .4s;
//   }

//   .checkbox-wrapper-54 input:checked + .slider {
//     background-color: #303136;
//   }

//   .checkbox-wrapper-54 input:checked + .slider:before {
//     left: calc(100% - (var(--size-of-icon,1.4em) + var(--slider-offset,0.3em)));
//     background: #303136;
//     /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
//     box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
//   }
