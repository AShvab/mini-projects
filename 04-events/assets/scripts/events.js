const button = document.querySelector('button');

// button.onclick = function(){}

const buttonClickHandler = ()=>{
alert("Hello")
} 

// button.onclick = buttonClickHandler

button.addEventListener('click', buttonClickHandler);
// button.removeEventListener()

setTimeout(()=>{
    button.removeEventListener('click', buttonClickHandler);
}, 2000)