// script.js

//select the elements and buttons
const button = document.getElementById("color-btn");
const reset_button = document.getElementById("reset-color-btn");
const detailsDiv = document.getElementById("details");
const bioDiv = document.getElementById("bio");
//add event
button.addEventListener("click", changeToSpotifyColors);
//add function to run when click happens
function changeToSpotifyColors() {
  detailsDiv.style.backgroundColor = "#111";
  bioDiv.style.backgroundColor = "forestgreen";
}

//add event
reset_button.addEventListener("click", changeToTomato);
//add event to run, un-does the first event
function changeToTomato() {
  detailsDiv.style.backgroundColor = "mintcream";

  bioDiv.style.backgroundColor = "mintcream";
}
