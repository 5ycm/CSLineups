console.log("Script is running");

function handleButtonClick(event){
    let url = this.getAttribute('data-url');
    replaceSrc(url);
}

const buttons = document.querySelectorAll('.node');
buttons.forEach(function(button){
    button.onclick = handleButtonClick;
})

function replaceSrc(url){
    document.querySelector('iframe').setAttribute('src',url+'?autoplay=1&mute=1');
    console.log(url+' has been added');
}

