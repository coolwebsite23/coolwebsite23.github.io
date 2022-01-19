document.title = "HOME PAGE";
function links(){
  document.getElementById("links").style.display = "block";
}
if(document.body.onerror){
   var script = prompt("do you want to turn off JavaScript for this website? (true or false) there has been an error found on the code!");
   if(script == true){
     debugger;
   }else{
     console.log("no");
   }
}
