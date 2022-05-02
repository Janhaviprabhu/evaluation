// write js code here corresponding to matches.html

var match = JSON.parse(localStorage.getItem("schedule"));
display(match);


function display(arr) {
  document.querySelector("tbody").innerHTML = "";
  arr.forEach(function (elem) {
    var aa = document.createElement("tr");

    var dd = document.createElement("td");
    dd.innerText = elem.Matchno;

    var cc = document.createElement("td");
    cc.innerText = elem.TeamA;

    var ff = document.createElement("td");
    ff.innerText = elem.TeamB;

    var ss = document.createElement("td");
    cc.innerText = elem.Date;

    var bb = document.createElement("td");
    bb.innerText = elem.Venue;

    var vv = document.createElement("td");
    vv.innerText = "Favourite";
    vv.style.color = "green";
    vv.addEventListener("click", function () {
      favourite(elem);
    });
    vv.style.cursor = "pointer";

    aa.append(dd, cc, ff, ss, bb, vv);
    document.querySelector("tbody").append(aa);
  });
}


document.querySelector("#filterVenue").addEventListener("change", ffc);

function ffc() {
  var ccv = document.querySelector("#filterVenue").value;
  var filterrole = match.filter(function (elem) {
    return elem.Venue == ccv;
  });
  display(filterrole);
}

var fav = JSON.parse(localStorage.getItem("favourites")) || [];
function favourite(elem) {
  fav.push(elem);
  localStorage.setItem("favourites", JSON.stringify(fav));
}