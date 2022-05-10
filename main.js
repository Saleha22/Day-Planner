const onReady = () => {
  // render time
  $("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

  // render timeblocks
};

const renderTimeBlocks = () => {
  const renderTimeBlock = (workingHour) => {
    console.log(workingHour);
  };
  workingHours.forEach(renderTimeBlock);
};

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
  const dataFromLS = localStorage.getItem(key);

  // parse data from LS
  const parsedData = JSON.parse(dataFromLS);

  if (parsedData) {
    return parsedData;
  } else {
    return defaultValue;
  }
};

const writeToLocalStorage = (key, value) => {
  // convert value to string
  const stringifiedValue = JSON.stringify(value);

  // set stringified value to LS for key name
  localStorage.setItem(key, stringifiedValue);
};

$(document).ready(onReady);
