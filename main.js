$(document).ready(function () {
  // on page load
  $("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  hourlyBlock();
});

const hourlyBlock = () => {
  alert("loadHourlyblock");
};
