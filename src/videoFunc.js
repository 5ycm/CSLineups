console.log("Script is running");

function handleButtonClick(event){
    let url = this.getAttribute('data-url');
    replaceSrc(url,setBorder);
}

const buttons = document.querySelectorAll('.node');
buttons.forEach(function(button){
    button.onclick = handleButtonClick;
})

function replaceSrc(url,callback){
    document.querySelector('iframe').setAttribute('src',url+'?autoplay=1&mute=1');
    console.log(url+' has been added');
    callback();
}

function setBorder(){
    setTimeout(() => {
         document.getElementById('closerVideo').src = 'images/x-symbol.png'
    },200);
    setTimeout(() => {  
        document.getElementById('videoFrame').style.border = '3px solid black';
    },200);
}

