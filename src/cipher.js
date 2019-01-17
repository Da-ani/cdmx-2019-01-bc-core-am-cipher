window.cipher = {

// esta es una funcion y se le van a pasar los parametros, dentro de esta función
//le daremos las instrucciones a encode
encode: (offsetIngresado, textoIngresado) => {
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

    nuevaPalabra+=resultado; //Esto significa que como el for va dando vueltas por cada letra ingresada por el usuario,
    // en let resultado va mandando
    //las letras que va pasando, por ejemplo si el ususario pone ABC, lo que hace for es primero ir con la  A
    //le aplica toda la función y la manda a let resultado despues se sigue con la B, le aplica la funcion y al momento de mandarla
    //a let resultado esa B va a sustituir a la A y en realidad no queremos eso lo que queremos es que asi como vaya
    //pasando las letras las vaya guardando y es por ello que creamos una variable llamada let nuevaPalabra
    //dandole un valor ("") vacío con comillas de manera que la computadora sepa con esas comillas que ahí se va a guardar
    //un string
    //En donde dice (nuevaPalabra+=resultado) lo que estamos haciendo es: que en la variable nuevaPalabra que ya está
    //declarada en la parte de arriba con el + le estamos sumando cada letra que va contando el for y la va mandando
    // a la variable declarada arriba como let nuevaPalabra

    }
  return nuevaPalabra


},



decode: (offsetIngresado, textoIngresado) => {


  let nuevaPalabra= "";
  let i = 0;
  textoIngresado= textoIngresado.toUpperCase();

  for(i=0; i<textoIngresado.length; i++){

    let textoYaCifrado = (textoIngresado.charCodeAt(i) + 65 - parseInt(offsetIngresado)) %26 + 65;

    let resultado = String.fromCharCode(textoYaCifrado);

    nuevaPalabra+=resultado;

  }

  return nuevaPalabra

}
}
