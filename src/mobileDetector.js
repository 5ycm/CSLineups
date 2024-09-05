
function isMobileCheck(){
    return /Android|iPhone/i.test(navigator.userAgent) || navigator.maxTouchPoints > 0;
}

console.log("Mobile detector running");

setInterval(function() {
    let boolChecker = isMobileCheck();
  if(boolChecker){
    document.location="mobileDetected.html";
  }
}, 500);