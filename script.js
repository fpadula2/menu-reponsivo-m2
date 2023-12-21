function animar() {
    const btnMenu = document.querySelector("#btn");
    btnMenu.classList.toggle("ativar");
}

const menuBtn = document.querySelector("header button");
const burgerBars = document.querySelector(".fa-bars");
const closeBtn = ["X", burgerBars];
const burgerBtn = [menuBtn];
const teste = document.querySelector("header i")
console.log(teste);


menuBtn.addEventListener("click", () => {
    let toggleMenu = document.querySelector(".mobile__elements").classList.toggle("show-menu__mobile")
})