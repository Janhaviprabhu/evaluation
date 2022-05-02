// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", clc);
var arr = JSON.parse(localStorage.getItem("schedule")) || [];

function clc() {
  event.preventDefault();
  var all = {
    Matchno: document.querySelector("#matchNum").value,
    TeamA: document.querySelector("#teamA").value,
    TeamB: document.querySelector("#teamB").value,
    Date: document.querySelector("#date").value,
    Venue: document.querySelector("#venue").value,
  };
  arr.push(all);
  localStorage.setItem("schedule", JSON.stringify(arr));
}