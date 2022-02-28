// SWITCH statement
// pseudocode:
/* switch (expression) {
  case choice1:
    //run this code
    break;

  case choice2:
    //run this code instead
    break;

  // include as many cases as you like

  default:
  //actually, just run this code
} */

// weather exercise, using switch this time

const select = document.querySelector("#select-weather");
const para = document.querySelector(".para-weather");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "Beautiful day for an ice cream, going on the beach or park";
      break;
    case "raining":
      para.textContent =
        "It's raining, ohh nooo, take an umbrella with you and dont stay out for long time";
      break;
    case "snowing":
      para.textContent = "Snow..amazing, let's build a snowman";
      break;
    default:
      para.textContent = "It might rain, so be prepared";
  }
}
