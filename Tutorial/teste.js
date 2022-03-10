// console.log("hello yarn");

// console.log("hello world");
// variables: let var_name = "var_value";
// const: const var_name = "var_value";

// * uns tipos de variaveis

let ultimoNome = null; //=null transforms the variable into an object
// console.log(typeof ultimoNome);
console.log(ultimoNome == false);
console.log(!ultimoNome);

let primeiroNome = undefined;
// console.log(typeof primeiroNome);
// ! empty, null e underfined will return as false if treated as booleans

// * object sintax

// objetos em javascript
let pessoa = {
  nomeCompleto: "Ana Atala",
  idade: 33,
};

pessoa.idade = 24;

// console.log(pessoa);
// console.log(pessoa.nomeCompleto);
// console.log(pessoa["nomeCompleto"]);

// * operadores aritmeticos
// !   == valores iguals
// !   === valores e tipos iguais
// console.log(3 == "3");  // true, will compare contents
// console.log(3 === "3"); // false, will compare contents AND types
// nao !
// e &&
// ou ||

// * OPERADOR TERNARIO

// teste_logico ? value_true : value_false
result = 3 === "3" ? "equals" : "not equals";
// console.log(result);

// * functions

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
// returnEvenValues(numbers);

// * ARRAY STUFF

const frutas = ["maca", "banana", 4, "morango"]; //const mas nao e const?!?!  | can mix types
// frutas.push(pessoa); //add stuff to array
// console.log(frutas);
// frutas[0] = "abacate";
// console.log(frutas[0]);
// console.log(frutas[2]);
// console.log(typeof frutas); //arays are OBJECTS of type array, we have multiple pre built functions to use with 'em

arr = ["1", 1, false, true, "something,", 2.43, "the last thing"];

arr.push("final dot: .");

arr.forEach((element) => {
  // console.log(element);
});
// arr.pop(); //remove last item
// arr.shift(); //remove first item
// arr.unshift("Once upon a time"); //add as first item
// console.log(arr, "\n", "index of false: ", arr.indexOf(false)); //return index of
// console.log(arr.splice(0, arr.indexOf("something,")));
// console.log("after split: ", arr); //ARRAY SPLICE WILL CHANGE THE ARRAY WHEN USED
// newArr = arr.slice(0, 3);
// console.log("newArr: ", newArr);
// console.log(arr.includes(2.43));  // returns ture
// console.log(arr.includes(3)); // returns false
// arr = [1, 1, 1, 1];
// console.log(arr.every((item) => item === 1));
// console.log(arr.some((item) => item === 1));
// console.log(arr.reverse)

// * OBJETOS

var xicara = {
  cor: "blue",
  tamanho: 350,
  tomarCafe: function () {
    console.log(`Y/N took a sip from the ${cor} mug`);
  },
};
// ? how we inherit
var circle = {
  radius: 15,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
  volume: function (x) {
    console.log(x);
    return Math.PI * x * this.radius ** 3;
  },
};

// var { cor } = xicara;
// console.log(cor);
// xicara.tomarCafe();
// console.log(circle.area());
// console.log(circle.volume(4 / 3));
// console.log(Object.values(circle))
// console.log(Object.keys(circle));

// * CONDITIONALS

let value = "1";

// if (value == true) {
//   // ! needs the (). if (value) didnt work
//   console.log("TRUEEEEE");
// } else if (value == false) {
//   console.log("COPIUM");
// } else {
//   console.log("not a bool");
// }

let reminder;

// switch (value) {
//   case 1:
//     console.log("pop");
//     break;
//   case "1":
//     console.log("bop");
//     break;
//   default:
//     console.log("idunno");
// }

// * LOOPS

let array = ["value1", "value2", "value3"];
let obj = {
  name: "obj name",
  age: "not 18",
  race: "alien",
};

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// array.forEach((element) => {
//   console.log(element);
// });

// for (let i in array) {
//   console.log(i); // imprime o indice como string... inutil
// }

// for (let i of array) {
//   console.log(i); // imprime o indice como string... inutil
// }

// for (let i in obj) {
//   console.log(i); // outputs the argument var as a string
// }

// ! does not work like that
// for (let i of obj) {
//   console.log(i); // outputs the argument var as a string
// }

// while (true) {
//   console.log("HA! YOU FELL IN MY TRAP");
// }

// do {
//   console.log("HA! YOU FELL IN MY TRAP");
// } while (true);
