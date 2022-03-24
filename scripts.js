
let caja = document.getElementById('ress');
let ancho = window.innerWidth;
let alto = window.innerHeight;
caja.innerHTML = `w: ${ancho} h: ${alto}`;



let btnmenu = document.querySelector(".btn-menu"); //este es el boton de hamburguesa
let menu = document.querySelector(".navbar"); //este es el menu
let mainBody = document.querySelector("main"); //este el el contenido de la web
let link = document.getElementsByTagName("li"); //obtenemos los elementos de la lista
let body = document.querySelector("html");

if(ancho >= 576){
    menu.removeChild(btnmenu);
}

if (ancho < 576) {
    
    menu.classList.add("navbar-hidden");

    for(let i = 0; i<link.length;i++){
        link[i].addEventListener('click', (e) => {  
            menu.classList.toggle("navbar-hidden");
            body.classList.remove("noScroll");
        });
    }
    
    
    btnmenu.onclick = () => {
        menu.classList.toggle("navbar-hidden");
        mainBody.classList.toggle("desplazamiento");
        body.classList.toggle("noScroll");
    }
}