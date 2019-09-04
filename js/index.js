// Your code goes here
let test = document.querySelector("html")
test.style.backgroundColor = "red"

let navBar = document.querySelectorAll(".nav-link")
navBar.forEach(x => {
    x.addEventListener("mouseover", e => {
        x.style.color = "red"
    })
})
// 1 Hover over to change color

let mLeave  = document.querySelector(".text-content p")
mLeave.addEventListener("mouseleave", e => {
    mLeave.style.fontSize = "2rem"
})
// 2 hover over and move away to change font

let cMenu = document.querySelector(".intro img")
cMenu.addEventListener("contextmenu",e =>{
    e.preventDefault();
})
// 3 you can no longer right click and steal my picture

let scale = 1
let zWheel = document.querySelector(".content-destination p")
zWheel.onwheel = zoom;

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    event.target.style.transform = `scale(${scale})`;
  }
  //4 zoom in on content

  window.addEventListener("load", event =>{
      console.log(`page is fully loaded`)
  })
  // 5  page loaded

  let dClick = document.querySelector(".footer p ")
  dClick.addEventListener("dblclick", event => {
      event.target.style.color= "purple"
      event.target.style.padding = " 1em"
      event.target.style.transform= "scale(.9)"
      event.target.style.transformOrigin="0 0"
      event.target.style.transition = "transform .6s"
  })
// 6 double click  to purple

let newButton = document.querySelector(".destination")
let myButton = document.createElement("button")
myButton.textContent = "keep count"
myButton.addEventListener("click", event => {

    myButton.innerHTML = `Click count: ${event.detail}`
})
newButton.appendChild(myButton)

// 7 button that counts


let form = document.querySelector(".destination")
let addForm = document.createElement("textarea")
addForm.style.backgroundColor="white"
form.prepend(addForm)

let form2 = document.querySelector(".destination")
let addForm2 = document.createElement("textarea")
addForm2.style.backgroundColor="white"
form2.prepend(addForm2)

addForm2.contentEditable="true"
addForm2.textContent= "copy me"
addForm.contentEditable="true"
addForm.textContent= "copy me also"

const source = document.querySelector('.content-pick .destination textarea');
console.log(source)
source.addEventListener('cut', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();
    event.preventDefault();
});
// 8 cuts and makes it capital

let mouseEnter = document.querySelector(".intro h2")
mouseEnter.addEventListener("mouseover", event => {
    event.target.style.color = "yellow"
})

// 9

let form3 = document.querySelector(".destination:nth-child(3)")
let addForm3 = document.createElement("textarea")
addForm3.style.backgroundColor="white"
form3.prepend(addForm3)

let form4 = document.querySelector(".destination:nth-child(3)")
let addForm4 = document.createElement("textarea")
addForm4.style.backgroundColor="white"
form4.prepend(addForm4)

addForm4.contentEditable="true"
addForm4.textContent= "CHECK THIS OUT"
addForm3.contentEditable="true"
addForm3.textContent= "WOW"

const pastes = document.querySelector('.content-pick .destination:nth-child(3) textarea');
console.log(pastes)
pastes.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toLowerCase();
 
    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));

    event.preventDefault();
});


let home1 = document.querySelector("nav a")
console.log(home1)
home1.setAttribute("href", "https://www.google.com")
home1 .addEventListener("click", e => {
    event.preventDefault();
})

let home2 = document.querySelector("nav a:nth-child(2)")
console.log(home2)
home2.setAttribute("href", "https://www.nba.com")
home2 .addEventListener("click", e => {
    event.preventDefault();
})

let spin = document.querySelector(".content-section img")
console.log(spin)
spin.addEventListener("mouseover", e =>{
    e.target.style.transform = "rotate(1e+07deg"
    e.target.style.transition = "all 180s ease 0s"
})