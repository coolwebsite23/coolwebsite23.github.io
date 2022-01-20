document.title = "HOME PAGE";
function links(){
  document.getElementById("links").style.display = "block";
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
