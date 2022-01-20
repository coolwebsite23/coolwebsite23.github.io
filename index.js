document.title = "HOME PAGE";
function links(){
  var div = document.createElement("div");
  div.innerHTML = ["<ul><li><a href='page2.html'>page 2</a></li></ul>"];
  document.body.appendChild(div);
}
if(document.body.onerror){
   var script = prompt("do you want to turn off JavaScript for this website? (true or false) there has been an error found on the code!");
   if(script == true){
     //the prompt output is true
     debugger;
   }else{
     //the prompt output is false
     console.log("no");
   }
}
var scripttag = document.createElement("script");
script.src = "supported.js";
document.body.appendChild(script);
if(getCookie("username")){
  alert("welcome back" + getCookie("username"));
}else{
  console.log("new user");
}
