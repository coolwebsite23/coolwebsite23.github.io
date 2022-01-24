var titlehead = document.getElementsByTagName("h1");
if(titlehead.onclick == true){
  window.location.back;
}
alert("Website loaded");
if(document.body.onerror){
  window.location.hash = "#js=document.body.onerror";
}
if(window.location.hash == "#js=document.body.onerror"){
   window.location.assign("error.html#error=document.body.onerror");
}
