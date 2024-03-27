// Declarando o array de números
let numeros = [1, 2, 3, 4, 5];

// Imprimir os números do array
console.log("Imprimir os números do array:");
numeros.forEach(numero => console.log(numero));

// Adicionar 1 a cada número do array e imprimir
console.log("Adicionar 1 a cada número do array e imprimir:");
numeros.forEach(numero => console.log(numero + 1));

// Criar um novo array com os números do array original incrementados em 1
console.log("Criar um novo array com os números do array original incrementados em 1:");
let novoArray = [];
numeros.forEach(numero => novoArray.push(numero + 1));