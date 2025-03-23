const opCl = document.querySelector(".op-cl")
const show = document.querySelector(".show")
const display = document.querySelector(".dis")
const navBar = document.querySelector(".nav-bar")
const openBtn = document.getElementById("menu-open-button")
const closeBtn = document.getElementById("menu-close-button")

document.querySelector(".op-cl").addEventListener("click", ()=>{
    show.classList.toggle("show")
})
const opCll = document.querySelector(".op-cll")
const showS = document.querySelector(".show-s")

document.querySelector(".op-cll").addEventListener("click", ()=>{
    showS.classList.toggle("show-s")
})
const opClll = document.querySelector(".op-clll")
const showSS = document.querySelector(".show-ss")

document.querySelector(".op-clll").addEventListener("click", ()=>{
    showSS.classList.toggle("show-ss")
})
const opCla = document.querySelector(".op-cla")
const showA = document.querySelector(".show-a")

document.querySelector(".op-cla").addEventListener("click", ()=>{
    showA.classList.toggle("show-a")
})
openBtn.addEventListener("click", ()=>{
    navBar.classList.add("dis")
})
closeBtn.addEventListener("click", ()=>{
    navBar.classList.remove("dis")
})
