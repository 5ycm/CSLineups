document.getElementById('closerVideo').onclick = function(){
    document.getElementById('closerVideo').src = "";
    document.getElementById('iFrameID').src = "";
    document.getElementById('videoFrame').style.border = '0px solid black';
}