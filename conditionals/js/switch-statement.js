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

// Switch Ranges
// There might be an occasion in which you will need to evaluate a 
//range of values in a switch block, as opposed to a single value as 
//in our example above. We can do this by setting our expression to true 
//and doing an operation within each case statement.
// Set the student's grade
const grade = 87;

switch (true) {
	// If score is 90 or greater
	case grade >= 90:
		console.log("A");
		break;
	// If score is 80 or greater
	case grade >= 80:
		console.log("B");
		break;
	// If score is 70 or greater
	case grade >= 70:
		console.log("C");
		break;
	// If score is 60 or greater
	case grade >= 60:
		console.log("D");
		break;
	// Anything 59 or below is failing
	default:
		console.log("F");
}