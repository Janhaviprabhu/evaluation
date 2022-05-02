// write js code here corresponding to favourites.html

var match = JSON.parse(localStorage.getItem("favourites"));
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

    var mm = document.createElement("td");
    mm.innerText = elem.Date;

    var bb = document.createElement("td");
    bb.innerText = elem.Venue;

    var ggh = document.createElement("td");
    ggh.innerText = "DELETE";
    ggh.style.color = "red";
    ggh.addEventListener("click", Delete);
    ggh.style.cursor = "pointer";

    aa.append(dd, cc, ff, mm, bb, ggh);
    document.querySelector("tbody").append(aa);
  });
}


function Delete(ele, index) {
  match.splice(index, 1);
  localStorage.setItem("favourites", JSON.stringify(match));
  window.location.reload();
}
