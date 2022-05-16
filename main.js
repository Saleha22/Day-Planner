const onReady = () => {
  // render time
  $("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

  // render timeblocks
};

//const renderTimeBlocks = () => {
//const renderTimeBlock = (workingHour) => {
//console.log(workingHour);
//};
// workingHours.forEach(renderTimeBlock);
//};

const getClassName = (workingHour) => {
  const currentHour = moment().hour();
  //if workingHour is present
  if (workingHour === currentHour) {
    return "present";
  }
  //if workingHour is future
  if (workingHour > currentHour) {
    return "future";
  }
  return "past";
  //else past
};

const readFromLocalStorage = (key, defaultValue) => {
  // get from LS using key name
  const output = localStorage.getItem(key);

  if (output) {
    jQuery(`#${key}Textarea`).val(output);
  }
};

const writeToLocalStorage = (key) => {
  // convert value to string
  console.log(key["target"]["id"]);
  let id = key["target"]["id"];
  console.log(`#${id}Textarea`);
  let value = jQuery(`#${id}Textarea`).val();

  console.log(`#${id}Textarea`);
  console.log(value);
  // set value to LocalStorage for key name
  localStorage.setItem(id, value);
};

$(document).ready(onReady);

document
  .getElementById("Save9am")
  .addEventListener("click", writeToLocalStorage);

document
  .getElementById("Save10am")
  .addEventListener("click", writeToLocalStorage);

document
  .getElementById("Save11am")
  .addEventListener("click", writeToLocalStorage);

document
  .getElementById("Save12pm")
  .addEventListener("click", writeToLocalStorage);

document
  .getElementById("Save13pm")
  .addEventListener("click", writeToLocalStorage);

document
  .getElementById("Save14pm")
  .addEventListener("click", writeToLocalStorage);

document
  .getElementById("Save15pm")
  .addEventListener("click", writeToLocalStorage);

document
  .getElementById("Save16pm")
  .addEventListener("click", writeToLocalStorage);

document
  .getElementById("Save17pm")
  .addEventListener("click", writeToLocalStorage);

document
  .getElementById("Save18pm")
  .addEventListener("click", writeToLocalStorage);

readFromLocalStorage("Save9am", "");
readFromLocalStorage("Save10am", "");
readFromLocalStorage("Save11am", "");
readFromLocalStorage("Save12pm", "");
readFromLocalStorage("Save13pm", "");
readFromLocalStorage("Save14pm", "");
readFromLocalStorage("Save15pm", "");
readFromLocalStorage("Save16pm", "");
readFromLocalStorage("Save17pm", "");
readFromLocalStorage("Save18pm", "");
