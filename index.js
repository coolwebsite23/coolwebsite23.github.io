document.title = "HOME PAGE";//add the title
function links(){//create function
  var div = document.createElement("div");//create div
  div.innerHTML = ["<ul><li><a href='page2.html'>page 2</a></li></ul>"];//add links to div
  document.body.appendChild(div);//append div to body
}
if(document.body.onerror){
   alert("there was an error loading the website!");
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
if(window.loction.hash == "#page=2"){
  //load page2
  window.location.assign("page2.html");
}
if(window.location.hash == "#page=home"){
  //load home page
  window.location.assign("index.html");
}
if(window.location.close){
  var clos = prompt("are you sure you want to close this page? (true or false)");
  if(clos == true){
    alert("closing");
  }else{
    alert("stopped closing page")
  }
}
if(window.location.href > "https://collwebsite23.github.io/page2"){
  document.title = "page two";
}else if(window.location.href > "https://coolwebsite23.github.io/page2.html"){
  window.location.assign("page2");
}
