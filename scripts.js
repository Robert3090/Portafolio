
let caja = document.getElementById('ress');

let ancho = window.innerWidth;
let alto = window.innerHeight;

caja.innerHTML = `w: ${ancho} h: ${alto}`;

let btnmenu = document.querySelector(".btn-menu"); //este es el boton de hamburguesa
let menu = document.querySelector(".navbar"); //este es el menu
let mainBody = document.querySelector("main"); //este el el contenido de la web
console.log(mainBody);

btnmenu.onclick = () => {
    menu.classList.toggle("navbar-hidden");
    mainBody.classList.toggle("desplazamiento");
};