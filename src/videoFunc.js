console.log("Script is running");

function handleButtonClick(event){
    let url = this.getAttribute('data-url');
    replaceSrc(url,setBorder);
}

const buttons = document.querySelectorAll('.node');
buttons.forEach(function(button){
    if(button.getAttribute('data-url') != null){
    button.onclick = handleButtonClick;
    }
})

function replaceSrc(url,callback){
    document.querySelector('iframe').setAttribute('src',url+'?autoplay=1&mute=1');
    console.log(url+' has been added');
    callback();
    toClose();
}

function setBorder(){
    setTimeout(() => {
         document.getElementById('closerVideo').src = 'images/x-symbol.png'
    },200);
    setTimeout(() => {  
        document.getElementById('videoFrame').style.border = '3px solid black';
    },200);
}

function toClose(){
document.getElementById('closerVideo').onclick = function(){
    document.getElementById('closerVideo').src = "";
    document.getElementById('iFrameID').src = "";
    document.getElementById('videoFrame').style.border = '0px solid black';
}};

