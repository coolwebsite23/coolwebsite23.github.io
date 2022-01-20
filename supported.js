if("body" in document){
  //suported
  console.log("supported");
}else{
  //not supported
  if("write" in document){
    document.write("Your webbrowser does not support are website");
  }
}
