date = new Date().getFullYear()
document.getElementById("year").innerHTML = date

let menuBtn = document.querySelector(".menu-btn")
let mainMenu = document.querySelector(".main-menu")
menuBtn.addEventListener("click", () => {
  mainMenu.classList.toggle("show")
})
