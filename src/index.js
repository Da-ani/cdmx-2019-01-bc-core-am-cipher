// let recibir= document.getElementById('receptordemensaje')
//let recibir= (window.cipher.encode(offsetIngresado, textoIngresado)

let recibir1= document.getElementById('receptordemensaje')

document.getElementById('flechacifrar').addEventListener('click',() => {
let textoIngresado = document.getElementById('mensaje').value;

let offsetIngresado = document.getElementById('offset').value;

//(window.cipher.encode(offsetIngresado, textoIngresado);
//let recibir= document.getElementById('receptordemensaje').(window.cipher.encode(offsetIngresado, textoIngresado);
let funcion1= window.cipher.encode(offsetIngresado, textoIngresado);
recibir1.value= funcion1;

});

let recibir2= document.getElementById('receptordemensaje')

document.getElementById('flechadescifrar').addEventListener('click',() => {

let textoIngresado = document.getElementById('mensaje').value;

let offsetIngresado = document.getElementById('offset').value;

let funcion2= window.cipher.decode(offsetIngresado, textoIngresado);
recibir2.value= funcion2;
 });
