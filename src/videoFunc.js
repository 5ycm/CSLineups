console.log("Script is running");

function handleButtonClick(event){
    let url = this.getAttribute('data-url');
    replaceSrc(url,setBorder,this);
}

const buttons = document.querySelectorAll('.node');
buttons.forEach(function(button){
    if (button.getAttribute('data-url') != null) {
        button.onclick = handleButtonClick;
    }
})

function replaceSrc(url,callback,buttonClicked){
    document.querySelector('iframe').setAttribute('src',url+'?autoplay=1&mute=1');
    document.getElementById('closerVideo').style.visibility = 'visible';
    document.getElementById('iFrameID').style.visibility = 'visible';
    document.getElementById('videoFrame').style.visibility = 'visible';

    buttons.forEach(button => {
        if (button !== buttonClicked) {
            button.querySelector('img').style.transform = 'scale(0)';
            button.style.pointerEvents = 'none';     
        }
        else{
            button.querySelector('img').src = "images/reddot.png";
            button.querySelector('img').style.transform = 'scale(2.4)';
        }
    });
       
    console.log(url+' has been added');
    callback(toClose());
}

function setBorder(callback){
    document.getElementById('videoFrame').style.pointerEvents = 'auto';
    setTimeout(() => {
         document.getElementById('closerVideo').src = 'images/x-symbol.png'
         document.getElementById('videoFrame').style.border = '3px solid white';
    },200); 
        document.getElementById('videoFrame').style.visibility = 'visible';
    callback();
}

function toClose(){
document.getElementById('closerVideo').onclick = function(){

    document.getElementById('closerVideo').style.visibility = 'hidden';
    document.getElementById('iFrameID').style.visibility = 'hidden';
    document.getElementById('videoFrame').style.visibility = 'hidden';

    buttons.forEach(button=> {
        button.style.pointerEvents = 'auto';  
        button.style.visibility = 'visible';
        button.querySelector('img').src='images/dot.png';
        button.querySelector('img').style.transform = '';
    });
    document.getElementById('closerVideo').src = "";
    document.getElementById('iFrameID').src = "";
    document.getElementById('videoFrame').style.border = '0px solid black';
    document.getElementById('videoFrame').style.pointerEvents = 'none'; 
}};

