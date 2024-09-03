console.log("Script is running");

let buttonClickedVar = null;
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
            buttonClickedVar = button;
            button.querySelector('img').src = "images/reddot.png";
            button.querySelector('img').style.transform = 'scale(2.4)';
        }
    });
       
    console.log(url+' has been added');
    callback(toClose);
}

function setBorder(callback){
    document.getElementById('videoFrame').style.visibility = 'visible';
    setTimeout(() => {
        document.getElementById('closerVideo').src = 'images/x-symbol.png'
        document.getElementById('videoFrame').style.pointerEvents = 'auto';
        document.getElementById('videoFrame').style.border = '3px solid white';
        document.getElementById('videoFrame').style.boxShadow = '1px 1px 20px 3px';
        
    },200); 
        
    callback();
}


function toClose(){
    document.getElementById('closerVideo').onclick = closing;
    document.getElementById('map').onclick = closing;
}

function closing(){
    document.getElementById('closerVideo').style.visibility = 'hidden';
    document.getElementById('iFrameID').style.visibility = 'hidden';
    document.getElementById('videoFrame').style.visibility = 'hidden';
    buttons.forEach(button=> {
        button.style.pointerEvents = 'auto';  
        if(button == buttonClickedVar){
            button.querySelector('img').style.transform ='';
            setTimeout(()=> {
                button.querySelector('img').src='images/dot.png';
                buttonClickedVar = null;
            },170)
            return;
        }
        button.style.visibility = 'visible';
        button.querySelector('img').src='images/dot.png';
        button.querySelector('img').style.transform = '';
        document.getElementById('videoFrame').style.boxShadow = '0px 0px 0px';

    });
    document.getElementById('closerVideo').src = "";
    document.getElementById('iFrameID').src = "";
    document.getElementById('videoFrame').style.border = '0px solid black';
    document.getElementById('videoFrame').style.pointerEvents = 'none'; 
}

