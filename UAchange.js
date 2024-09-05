function isMobileCheck(){
    return /Android|iPhone/i.test(navigator.userAgent) || navigator.maxTouchPoints>0;
}

console.log("Mobile detector running");

setInterval(function() {
  if(!isMobileCheck()){
    document.location="index.html";
  }
}, 500);