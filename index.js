document.title = "HOME PAGE";
var button = document.getElementById("button");
button.onclick = rand()
function rand(){
  document.write(Math.floor(Math.random() * 1000));
}
