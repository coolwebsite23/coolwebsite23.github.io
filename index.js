document.title = "HOME PAGE";
function rand(){
  document.write(Math.floor(Math.random() * 1000));
}
document.body.style.display ="none";
setTimeout(function(){
  document.body.style.display = "block";
}, 5000);
