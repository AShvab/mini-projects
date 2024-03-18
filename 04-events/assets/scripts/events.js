const button = document.querySelector("button");

// button.onclick = function(){}

const buttonClickHandler = (event) => {
  console.log(event);
};

// button.onclick = buttonClickHandler

// const boundFn = buttonClickHandler.bind(this)

// button.forEach(btn=>{
//     btn.addEventListener('click', buttonClickHandler);
// })

// setTimeout(()=>{
//     button.removeEventListener('click', buttonClickHandler);
// }, 2000)

// window.addEventListener('scroll', event =>{
//     console.log(event)
// })

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  console.log("Clicked div");
  console.log(event);
});

button.addEventListener("click", function(event){
    event.stopPropagation()
  console.log("Clicked button");
  console.log(event);
  console.log(this)
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector('ul')


// listItems.forEach((item) => {
//   item.addEventListener("click", event => {
//     event.target.classList.toggle("highlight");
//   });
// });

list.addEventListener("click", function(event) {
    // console.log(event.currentTarget)
        // event.target.classList.toggle("highlight");
        event.target.closest("li").classList.toggle("highlight");
        // form.submit();
        // button.click()
        console.log(this)
      })





// ===========================================================================
// Basic Infinite Scrolling
let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement("div");
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener("scroll", scrollHandler);
