document.querySelector(".menu-btn").addEventListener("click", () => document.querySelector(".main-menu").classList.toggle("show"))

date = new Date().getFullYear()
document.getElementById("year").innerHTML = date
