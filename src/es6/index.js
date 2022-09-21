
// Definición de valores por defecto.

function newFunction( name = 'Mauro', age = 23, country = 'ARG' ) {

    console.log(name, age, country);
}

newFunction();
newFunction('Richard', 32, 'MDZ');


// Concatenación.

let frase1 = 'Soy la frase 1.';
let frase2 = 'Soy la frase 2.';

let fraseMaestra = `${frase1} ${frase2}`;

console.log(fraseMaestra);


function newFunction1 ( name = 'Colmillo', age = 2, raza = 'Pichichu' ) {
    var fraseMaestra = `Mi perro se llama ${name}, tiene ${age} años y su raza es ${raza}.`;

    console.log(fraseMaestra);
}

newFunction1();
newFunction1('Huesos', 5, 'Pichichu');


// Multilínea.

let frase = `

    Este es un texto de prueba con
    saltos de línea inclidos. Esto
    los hacemos gracias a las comi-
    llas francesas. !

`;

console.log(frase);


// Desestructuración de elementos.

let person = {

    name: 'Mauro',
    age: 23,
    country: 'ARG'

};

// Forma antigua.
console.log(person.name, person.age, person.country);

// Forma nueva.
let { name, age, country } = person;
console.log(name, age, country);



//Operador de propagación.

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];


// De esta forma, "unimos" diferentes elementos
let education = ['David', ...team1, ...team2];

console.log(education);


// Variables let.

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);


// Variables const.

const a = 'b';