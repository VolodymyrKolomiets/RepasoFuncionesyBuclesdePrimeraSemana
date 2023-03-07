//Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':

// TEST 1
    const ordenador = {
        marca: 'Asus',
        tipo: 'portátil',
        perifericos: {touchpad:true},
        almacenamiento: {discos:['SSD']},
        procesador: {velocidad: '2.5 GHz'}
    }

  if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 2
  if (ordenador.marca === "Asus") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 3
  if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 4
  if (ordenador.perifericos.touchpad === true) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 5
  if (ordenador.almacenamiento.discos[0] === "SSD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 6
  if (ordenador.procesador.velocidad === "2.5 GHz") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

//Imprimir los números del 21 al 34 en la consola.
for (let i = 21; i < 35; i++) {
    console.log(i)
    
}

//Sumar los números del 1 al 10 y mostrar el resultado en la consola.

let num = 0

for (let i = 1; i <= 10; i++) {
     num += i
     
    }
    console.log(num)


//Dado un array de números, imprimir en la consola la suma de todos los números.

const arr = [1,2,3,4,5,6,7,]
let e = 0
for (let i = 0; i <= arr.length; i++) {
     e += i
}
console.log(e)


//Dado un número, encontrar su factorial.
let fact = 1

for (let i = 1; i <= 10; i++) {
    fact = fact * i 
    
    }
console.log(fact)

//Dado un array de números, imprimir en la consola solo los números impares.
const arraY = [0,1,2,3,4,5,6,7,8,9,10,11]

for (const i of arraY) {
    if (i % 2 ==1 ) {
        console.log(i)
    }
}

//Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.

const person = [
   {
    nombre: 'Anna',
    edad: 23
  },
  {
    nombre: 'Victor',
    edad: 17
  },
   {
    nombre: 'Maria',
    edad: 19
  },
   {
    nombre: 'Juan',
    edad: 25
  },
   {
    nombre: 'Carla',
    edad: 16
  },
]

for (const x of person) {
  if (x.edad > 18) {
    console.log(x.nombre)
  }
}


// for (const x in person) {
//   if (Object.hasOwnProperty.call(person, x)) {
//     const element = person[x]
//     console.log(element.nombre)
//   }
// }


//Dado un número, imprimir en la consola si es primo o no.

const esPrimo = numero => {
	
	if (numero == 0 || numero == 1 || numero == 4) return false
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false
	}
	
	return true;
}

const numerosParaProbar = [1, 2, 50, 31, 3, 14, 53, 7, 77, 13, 49];

numerosParaProbar.forEach(numero => {
	console.log("¿%d es primo? %s", numero, esPrimo(numero))
})

//Utiliza la siguiente array para resolver los próximos ejercicios:



let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];



//Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.

for (const i of animales) {
  if ( i.especie == 'Felino' && i.edad > 4) {
     const group = i
     console.log(group)
  }
}


//Crea un array con los animales que son herbívoros y tienen una edad par. No utilices el método filter de las arrays y muéstralo por consola.

for (const i of animales) {
  if ( i.especie == 'Herbívoro' && i.edad % 2 ===0) {
     const group = i
     console.log(group)
  }
}

//Crea un array con los animales que son omnívoros o aves y menores de 3 años. No utilices el método filter de las arrays y muéstralo por consola.

for (const i of animales) {
  if ( (i.especie == 'Omnívoro' || i.especie == 'Ave') && i.edad < 3) {
     const group = i
     console.log(group)
  }
}

//Crea un array con los animales que su especie empieza por "H". No utilices el método filter de las arrays y muéstralo por consola.

for (const i of animales) {
  if ( i.especie.charAt(0) =='H' ) {
     const group = i
     console.log(group)
  }
}

//Crea un array con los animales cuyo nombre tenga más de 4 letras y su especie sea felino o herbívoro. No utilices el método filter de las arrays y muéstralo por consola.

for (const i of animales) {
  if ( (i.especie == 'Felino' || i.especie == 'Herbívoro') && i.nombre.length > 4) {
     const group = i
     console.log(group)
  }
}

//Crea una función llamada eliminarDuplicados(array) que reciba como parámetro un array de elementos y devuelva un nuevo array con los elementos únicos, es decir, sin elementos duplicados. Puedes utilizar un ciclo for...of para recorrer el array original.
//salida
const numeros = [1, 2, 3, 3, 4, 5, 5, 6]
const palabras = ['hola', 'adios', 'hola', 'hasta', 'luego']

function eliminarDuplicados(array) {
  const arrayUnico = []

  for (const elemento of array) {
    if (!arrayUnico.includes(elemento)) {
      arrayUnico.push(elemento)
    }
    
  }
  return arrayUnico
}

const numerosUnicos = eliminarDuplicados(numeros)
console.log(numerosUnicos)

const palabrasUnicas = eliminarDuplicados(palabras);
console.log(palabrasUnicas)



//Crea una función llamada sumarElementos(array) que reciba como parámetro un array de números y devuelva la suma de todos sus elementos. Puedes utilizar un ciclo for...of para recorrer el array y sumar sus elementos.
function sumarElementos(array) {
  let suma = 0
  for (const i of array) {
    suma += i
  }
  return suma
}

console.log(sumarElementos([1, 2, 3, 4, 5])); // Devuelve 15
console.log(sumarElementos([-5, 10, -15, 20])); // Devuelve 10

//Crea una función en contarCaracteres(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cantidad total de caracteres que hay en todas las cadenas juntas. Puedes utilizar un ciclo for...of para recorrer el array y contar los caracteres.

function contarCaracteres(array) {
  let letters = 0
  for (const i of array) {
    letters += i.length
  }

  return letters
}

console.log(contarCaracteres(["Hola", "Mundo"])); // Devuelve 9
console.log(contarCaracteres(["JavaScript", "es", "genial"])); // Devuelve 18

//Crea una función llamada numeroMasGrande(array) que reciba como parámetro un array de números y devuelva el número más grande de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar el número más grande.

function numeroMasGrande(array) {
  let biger = 0
  for (const i of array) {
    if( biger < i) {
      biger = i
    }
  }
  return biger
}

console.log(numeroMasGrande([1, 2, 3, 4, 5])); // Devuelve 5
console.log(numeroMasGrande([10, -5, 20, -15])); // Devuelve 20


//Crea una función llamada cadenaMasLarga(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cadena más larga de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar la cadena más larga.

function cadenaMasLarga(cadena) {
  let larger = ''
  for (const x of cadena) {
    if( larger.length < x.length)
    larger = x
  }
  return larger
}

console.log(cadenaMasLarga(["Hola", "Mundo"])); // Devuelve "Mundo"
console.log(cadenaMasLarga(["JavaScript", "es", "genial"])); // Devuelve "JavaScript"
