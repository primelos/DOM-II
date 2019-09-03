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

  