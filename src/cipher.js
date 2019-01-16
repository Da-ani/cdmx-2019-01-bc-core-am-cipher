window.cipher = {

// esta es una funcion y se le van a pasar los parametros, dentro de esta función
//le daremos las instrucciones a encode
encode: (offsetIngresado, textoIngresado) => {
let recibir = document.getElementById('receptordemensaje')
let nuevaPalabra= "";
let i = 0;
textoIngresado= textoIngresado.toUpperCase();

//Hacer un for para que vaya contando las letras que ingrese el usuario de una en una
for(i=0; i<textoIngresado.length; i++){
  //usamos charcodeat para que me convierta las letras ingresadas a ascii
let textoYaCifrado = (textoIngresado.charCodeAt(i) - 65 + parseInt(offsetIngresado)) %26 + 65;
//como en elresultado de la formula solo me dará en que posición estará
// la letra del desplazamiento que dimos usamos String.fromCharCodeF
//para que esa posición del desplazamiento que pedimos me lo convierta a la letra que le corresponde
let resultado = String.fromCharCode(textoYaCifrado);

nuevaPalabra+=resultado;

}
recibir.value= nuevaPalabra
return nuevaPalabra
},



decode: () => {


}
};
