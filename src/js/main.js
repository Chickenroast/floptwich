import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

document.addEventListener("DOMContentLoaded", function () {
  const drumPads = document.querySelectorAll(".drum-pad");
  const audio = document.getElementById("audio");

  drumPads.forEach((pad) => {
    pad.addEventListener("click", playSound);
  });

  function playSound() {
    const soundFile = this.getAttribute("data-sound");
    audio.src = soundFile;
    audio.play();
  }
});
