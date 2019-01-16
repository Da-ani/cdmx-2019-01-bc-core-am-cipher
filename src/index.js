document.getElementById('flechacifrar').addEventListener('click',() => {
let textoIngresado = document.getElementById('mensaje').value;

let offsetIngresado = document.getElementById('offset').value;

window.cipher.encode(offsetIngresado, textoIngresado);

});


// document.getElementById('flechadescifrar').addEventListener('click',() => {
//
// let textoIngresado = document.getElementById('mensaje').value;
//
// let offsetIngresado = document.getElementById('offset').value;
//
// window.cipher.decode(offsetIngresado, textoIngresado);
//
// });
