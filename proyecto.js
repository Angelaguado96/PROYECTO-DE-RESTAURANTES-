const menu = document .querySelector('.hambuerguesa ');
const navegacion = document .querySelector('.navegacion');

document.addEventListener ('DOMContentLoaded',()=> {
    eventos ();
 
});

const eventos = ()=>{
    menu.addEventListener('click',abrirMenu);
}
const abrirMenu = ()=> {
    navegacion.classList.remove( 'ocultar');
    botonCerrar();
}

const botonCerrar =()=>{
const btnCerrar = document.createElement (' p');
btnCerrar.textContent = 'x';
btnCerrar .classList.add('btn-cerrar');
 navegacion.appendChild(btnCerrar);
 cerrarMenu( btnCerrar )
 
}
const cerraMenu= (boton)=> {

boton.addEventListener('click',()=>{
     navegacion.classList .add ('ocultar');
});
}
