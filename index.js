document.title = "HOME PAGE";//add the title
function links(){//create function
  var div = document.createElement("div");//create div
  div.innerHTML = ["<ul><li><a href='page2.html'>page 2</a></li></ul>"];//add links to div
  document.body.appendChild(div);//append div to body
}
if(document.body.onerror){
   //ask user if he/she wants to stop the debug
   var script = prompt("do you want to turn off JavaScript for this website? (true or false) there has been an error found on the code!");
   if(script == true){
     //the prompt output is true
     debugger;//stop debugger
   }else{
     //the prompt output is false
     console.log("no");//log message to the console
   }
}
//create the script tag
var scripttag = document.createElement("script");//create the script tag
scripttag.src = "supported.js";//adding support.js to the index page
document.body.appendChild(scripttag);//append scripttag to body
//check for a 404
if(window.undefiend){
  //make the website load 404.html
  window.location.assign("404.html");
}
if("title" in document){
  //supported
  console.log("supported");
}else{
  //not supported
  alert("your webbrowser does not support our website!");
}
