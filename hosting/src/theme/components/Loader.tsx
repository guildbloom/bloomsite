import tags from "react-elevated-emotion";
import { keyframes } from "@emotion/react";

/*

.loader {
    position: relative,
    width: 164px,
    height: 164px,
  }
  .loader::before , .loader::after {
    content: '',
    position: absolute,
    width: 40px,
    height: 40px,
    background-color: #fff,
    left: 50%,
    top: 50%,
    animation: rotate 1s ease-in infinite,
}
.loader::after {
  width: 20px,
  height: 20px,
  background-color: #FF3D00,
  animation: rotate 1s ease-in infinite, moveY 1s ease-in infinite ,
}

@keyframes moveY {
  0% , 100% {top: 10%}
  45% , 55% {top: 59%}
  60% {top: 40%}
}
@keyframes rotate {
  0% { transform: translate(-50%, -100%) rotate(0deg) scale(1 , 1)}
  25%{ transform: translate(-50%, 0%) rotate(180deg) scale(1 , 1)}
  45% , 55%{ transform: translate(-50%, 100%) rotate(180deg) scale(3 , 0.5)}
  60%{ transform: translate(-50%, 100%) rotate(180deg) scale(1, 1)}
  75%{ transform: translate(-50%, 0%) rotate(270deg) scale(1 , 1)}
  100%{ transform: translate(-50%, -100%) rotate(360deg) scale(1 , 1)}
}
    
*/

const moveY = keyframes`
    0% , 100% {top: 10%}
    45% , 55% {top: 59%}
    60% {top: 40%}
`;

const rotate = keyframes`
    0% { transform: translate(-50%, -100%) rotate(0deg) scale(1 , 1)}
    25%{ transform: translate(-50%, 0%) rotate(180deg) scale(1 , 1)}
    45% , 55%{ transform: translate(-50%, 100%) rotate(180deg) scale(3 , 0.5)}
    60%{ transform: translate(-50%, 100%) rotate(180deg) scale(1, 1)}
    75%{ transform: translate(-50%, 0%) rotate(270deg) scale(1 , 1)}
    100%{ transform: translate(-50%, -100%) rotate(360deg) scale(1 , 1)}
`;

export const Loader = tags.span({})(() => ({
  position: "relative",
  width: 164,
  height: 164,

  ":before,:after": {
    content: "''",
    position: "absolute",
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    left: "50%",
    top: "50%",
    animation: `${rotate} 1s ease-in infinite`,
  },
  ":after": {
    width: 20,
    height: 20,
    backgroundColor: "#FF3D00",
    animation: `${rotate} 1s ease-in infinite, ${moveY} 1s ease-in infinite`,
  },
}));
