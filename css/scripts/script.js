const menuBtn = document.querySelector(".burger__menu");
const burgerBars = document.querySelector(".fa-bars");
const closeBtn = ["X", burgerBars];
const burgerBtn = [menuBtn];
const teste = document.querySelector("header i")
console.log(teste);


menuBtn.addEventListener("click", () => {
    let toggleMenu = document.querySelector("#mobile").classList.toggle("show-menu__mobile")
})

function animar() {
    const menuBtn = document.querySelector("#btn");
    menuBtn.classList.toggle("ativar")
}