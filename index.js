document.title = "HOME PAGE";
var button = document.querySelector("#button");
button.addEventListener('click', ()=>{
  document.write(Math.floor(Math.random() * 1000));
});
