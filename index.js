document.title = "Home Page";
var h1 document.createElement("h1")
h1.innerText = document.title;
document.body.appendChild(h1);
var hr = document.createElement("hr");
var hrp = document.createElement("p");
hrp.innerText = "Some Text";
var hr2 = document.createElement("hr");
document.body.appendChild(hr, hrp, hr2);
