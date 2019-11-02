// let str = prompt("Write any text");
// let strCont = str.split(' ');

// // если кол-во слов больше 4, все остальные отбросить
// // если меньше 4 то ничего не делать.

// if (strCont.length >= 4) {
//   console.log(strCont.slice(0, 4).join(' '));
// } else {
//   console.log(strCont.join(' '));
// }

/////////

// let names = ['Bob', 'Lee', 'Kevin', 'Steve', 'Jake'];
// let secondName = prompt('Write any name');

// // если пользователь ввёл имя, нужно удалить это имя и вывести в консоль
// // если его нет - добавляем

// if (names.includes(secondName)) {
//   let nameIndex = names.indexOf(secondName);
//   names.splice(nameIndex, 1);
// } else {
//   names.push(secondName);
// }

// console.log(names.join(' '));

/////////

// let nums = [4, 9, 11, 12, 38];
// let squares = [];

// for (let i = 0; i < nums.length; i++) {
//   squares.push(nums[i] ** 2)
// }

// console.log(squares);

/////////

// for (let i = 0; i <= 500; i++) {
//   console.log(i);
// }

/////////

// let nums = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ];

// console.log(nums)
// console.log(nums[1][1])
// console.log(nums.length)

/////////

// let names = ['Steve', 'Ann', 'Scott', 'Dave', 'Sam', 'Kevin'];
// let newNames = [];

// for (let i = 0; i < names.length; i++) {
//   if (names[i].startsWith('S')) {
//     newNames.push(names[i])
//   }
// }

// console.log(newNames);

/////////

// let names = ['Steve', 'Ann', 'Scott', 'Dave', 'Sam', 'Kevin'];
// let name = 'Scott';

// for (let i = 0; i < names.length; i++) {
//   if (names[i] == name) {
//     console.log(i);
//     break;
//   }
// }

/////////

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 == 0) {
//     continue;
//   }
//   console.log(i)
// }

/////////

// let i = 0;

// while (i != 100) {
//   console.log(i);
//   i++;
// }

/////////

// let num = 3;
// let guess = prompt('Enter any number');

// while (num != guess) {
//   guess = prompt('Enter any number');
// }

/////////

// let str = 'Hello World';

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i])
// }

/////////

// let nums = [55, -10, 13, -814, 305, 96, -1, 15];
// let positives = [];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > 0)
//     positives.push(nums[i])
// }

// console.log(positives)

/////////

let words = ['cat', 'simple', 'test', ' fetch', 'hi', 'ball'];
let newWords = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].length % 2 == 0) {
    newWords.push(words[i]);
  }
}
console.log(newWords)
