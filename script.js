const menuBtn = document.querySelector("header button");
const burgerBars = document.querySelector(".fa-bars");
const closeBtn = ["X", burgerBars];
const burgerBtn = [menuBtn];
const teste = document.querySelector("header i")
console.log(teste);


menuBtn.addEventListener("click", () => {
    let toggleMenu = document.querySelector("#mobile").classList.toggle("show-menu__mobile")
})

function animar() {
    const menuBtn = document.querySelector("header button");
    menuBtn.classList.toggle("ativar")
}


// menuBtn.addEventListener("click", () => {
//     let toggleMenu = document.querySelector("#mobile").classList.toggle("show-menu__mobile")
//     //     if (toggleMenu) {
//     //         menuBtn.innerText = closeBtn[0];
//     //     } else {
//     //         teste;
//     //     }
// })