// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  const cualquiercosa = ['casa','apartamento','torre'];
  console.log(cualquiercosa[0]);

}
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const cualquiercosa = ['casa','apartamento','torre'];
  console.log(cualquiercosa [cualquiercosa.length - 1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  const cualquiercosa = ['casa','apartamento','torre'];
  console.log(cualquiercosa.length);

}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var incrementarnuevo = [];
  for (let i = 0; i < incrementarnuevo.length; i++) {
    incrementarnuevo[i] = incrementarnuevo[i] + 1;
  } 
  return incrementarnuevo;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  const cualquiercosa = ['casa','apartamento','torre'];
  cualquiercosa.push("calle");
  console.log(cualquiercosa);

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  const cualquiercosa = ['casa','apartamento','torre'];
  cualquiercosa.unshift("carrera");
  console.log(cualquiercosa);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  const cualquierelemento = ["como","estas","amigo"]
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  const compruebaarray = [];

  if (compruebaarray.length === 0) {
    console.log ("falce");
    
  } else {
    console.log("true");

  }

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  const numsuma = [1,2,3,4,5];
  let sum = 0
  for (let i = 0; i < numsuma.length; i++) {
    sum = array[i];

  }
  console.log(sum);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  const totalpro = [2,4,5,6];
   let pro = 0
   for (let i = 0; i < totalpro.length - 1; i++) {
    pro = totalpro.length [0] + totalpro.length [1] + totalpro.length [2] + totalpro.length [3];

    pro = prom / totalpro.length
   }
    console.log = (prom)
  }


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
 let numgrande = 0;
  const grande = [3,5,7,9]
  console.log (Math.max(grande));

  }
    




function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
   let total = 0;
  const arguments = [];
  if (arguments.length === 0){
    console.log("0")
  }else if (arguments.length === 1) {
    console.log (arguments.lengt [0]);
  }
  else {
  for (let f = 0; f < arguments.length; f++) {
    if (arguments[f] != 0) {
      total = total + (arguments[f]*total);
    }
    }
    console.log(total);
  }

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  const arreglo = [];
    if (arreglo.length > 18 ) {
      console.log(arreglo.length);
    }
  
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var Domingo = 1;
  var Lunes = 2;
  var Martes = 3;
  var Miercoles = 4;
  var Jueves = 5;
  var Viernes = 6;
  var  Sabado = 7;
  const numerodedia = [];
  if (numerodedia.length[0] === 1 || numerodedia.lengt[0] === 7) {
  console.log("Es fin de semana");
  }
  else 
  console.log("Es dia laboral")
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  const nueve = [n]
  let num = n.toString()
  if(num.charAt(0) === "9"){
    return true
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (let i = 0; i < arreglo.length - 1; i++) {
    if (arreglo [i] !== arreglo[i+1]){
      return false
    }
    }
    return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for(let i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return nuevoArray;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray =[];
  for(let i= 0; i<array.length; i++) {
    
  }
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
