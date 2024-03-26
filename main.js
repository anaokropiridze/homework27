// 4.1
/* let array = [125, "text", "apple"];
console.log(array.length); */

// 4.2
/* let arr = ["a", "b", "c"];
arr.push("d"); 
arr[1] = "x";
console.log(arr); 
 */

// 4.3
/* let arr = [];
arr.push("a", "b", "c");
console.log(arr); */

// 4.4
/* let arr = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
arr[key1] += arr[key2];
console.log(arr); */

// 4.5
/* let arr = ["a", "b", "c", "d", "e"];
delete arr[1];
delete arr[3];

console.log(arr.length);
console.log(arr); */

// 4.6
/* let names = ["ხვიჩა", "გოგამაკა", "ანა", "ინა"];
names.sort();
console.log(names);

names.reverse();
console.log(names);  */

// 4.6
/* let arr = [11, 22, 33, 44, 55];
console.log(arr[arr.length - 1]); */

// 4.7
/* let arr = [10, 11, 12, 13, 14];
console.log(arr.length); */

// 4.8
/* let arr = [10, 11, 12, 13, 14];
console.log(arr.length); */

// 4.9
/* function blankArray() {
  return [];
}

let newArray = blankArray();
console.log(newArray); */

// 4.10
/* const getNumOfComponents = (componentArray) => {
  return componentArray.length;
};

let arr = [1, 2, 3, 4, 5];
console.log(getNumOfComponents(arr)); */

// 4.11
/* let priceSum = (prices) => {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum;
};

let prices = [10, 20, 15];
console.log(priceSum(prices)); */

// 4.12
/* let toys = ["overboard", "puzzle", "Lego"];
let newToy = "Yo-yo";
let addToy = (toy, toys) => {
  toys.push(toy);
  return toys;
};

let updatedToys = addToy(newToy, toys);
console.log(updatedToys); */

// 4.13
/* const addBol = (toys) => {
  toys.push("ball");
  return toys;
};

let toys = ["overboard", "puzzle", "Lego"];
let updatedToys = addBol(toys);
console.log(updatedToys); */

// 4.14
/* const getLastToy = (toys) => {
  return toys[toys.length - 1];
};

let toys = ["overboard", "puzzle", "Lego", "Yo-yo"];
console.log(getLastToy(toys)); */
