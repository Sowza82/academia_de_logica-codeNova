// 1. Função que adiciona isAdult ao objeto
function addIsAdult(person) {
  return {
    ...person,
    isAdult: person.age >= 18
  };
}

// 2. Função que combina múltiplos arrays usando rest e spread
function combineArrays(...arrays) {
  return arrays.flat();
  // Ou, se preferir fazer sem flat:
  // return [].concat(...arrays);
}

// Testando a parada
const person1 = { name: "João", age: 20 };
const person2 = { name: "Ana", age: 15 };

console.log(addIsAdult(person1)); // { name: 'João', age: 20, isAdult: true }
console.log(addIsAdult(person2)); // { name: 'Ana', age: 15, isAdult: false }

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [6, 7, 8];

console.log(combineArrays(arr1, arr2, arr3)); // [1, 2, 3, 4, 5, 6, 7, 8]
