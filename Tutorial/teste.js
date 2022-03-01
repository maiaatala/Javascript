console.log("hello yarn");

console.log("hello world");
// variables: let var_name = "var_value";
// const: const var_name = "var_value";

let ultimoNome = null; //=null transforms the variable into an object
// console.log(typeof ultimoNome);

let primeiroNome = undefined;
// console.log(typeof primeiroNome);

// objetos em javascript
let pessoa = {
    nomeCompleto: "Ana Atala",
    idade: 33,
};

pessoa.idade = 24;

// console.log(pessoa);
// console.log(pessoa.nomeCompleto);
// console.log(pessoa["nomeCompleto"]);

// ARRAY
const frutas = ["maca", "banana", 4, "morango"]; //const mas nao e const?!?!  | can mix types
// frutas.push(pessoa); //add stuff to array
// console.log(frutas);
// frutas[0] = "abacate";
// console.log(frutas[0]);
// console.log(frutas[2]);
// console.log(typeof frutas); //arays are OBJECTS of type array, we have multiple pre built functions to use with 'em

// operadores aritmeticos
// console.log(3 == "3");  // true, will compare contents
// console.log(3 === "3"); // false, will compare contents AND types
// ! nao
// && e
// || ou

// OPERADOR TERNARIO
// teste_logico ? value_true : value_false
result = 3 === "3" ? "equals" : "not equals";
// console.log(result);

function returnEvenValues(array) {
    let evenNums = [];
    for (i = 0; i < array.length; i++) {
        // if (!(array[i] % 2)) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
            // } else {
            //     console.log(`${array[i]} não e par`); //WHAAAAT
        }
    }
    console.log(`Even numbers are: ${evenNums.join(", ")}`); //PRETTY
}

const numbers = [0, 2, 3, "hello", 8.5, 4, 5, 6, 7, 8, 9, 10, 12]; //we need an === 0 because of the hello
returnEvenValues(numbers);
