// console.log("hello yarn");

// console.log("hello world");
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
// returnEvenValues(numbers);

// ARRAY STUFF

arr = ["1", 1, false, true, "something,", 2.43, "the last thing"];

arr.push("final dot: .");

arr.forEach((element) => {
  console.log(element);
});

// arr.pop(); //remove last item
// arr.shift(); //remove first item
// arr.unshift("Once upon a time"); //add as first item
// console.log(arr, "\n", "index of false: ", arr.indexOf(false)); //return index of
// console.log(arr.splice(0, arr.indexOf("something,")));
// console.log("after split: ", arr); //ARRAY SPLICE WILL CHANGE THE ARRAY WHEN USED
// newArr = arr.slice(0, 3);
// console.log("newArr: ", newArr);

// OBJETOS

var xicara = {
  cor: "blue",
  tamanho: 350,
  tomarCafe: function () {
    console.log(`Y/N took a sip from the ${cor} mug`);
  },
};

var circle = {
  radius: 10,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};

// var { cor } = xicara;
// console.log(cor);
// xicara.tomarCafe();
// console.log(circle.area());
