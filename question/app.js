//  基礎問題
// Q1
let nickname = 'ごっしー';
let age = 28;
let greet = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。';

console.log(greet);

// Q2
let languages = [
  'JavaScript', 
  'PHP',
  'Ruby',
  'Python',
  'Go',
]

let languagesText = `私の好きな言語は${languages[0]}です。次は${languages[3]}も勉強したいです。`;

console.log(languagesText);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log( playerList[1].favorites[1]);

// Q5
let ages = ( playerList[0].age + playerList[1].age + playerList[2].age);
console.log( ages / 3);

// Q6
// (1)
function sayHello() {
  let text = 'Hello'
  console.log(text);
}

sayHello();

// (2)
const sayWorld = function() {
  return 'World'
}

console.log(sayWorld());

// Q7
// (1)
user.birthday = '2000-09-27';
console.log(user.birthday);

// (2)
user.sayHello = function(){
  console.log('Hello!');
};

user.sayHello();

// Q8
// (1)
let calc = {
 add:function(x,y) {
  console.log(x + y);
 }
};

calc.add(5,2);

// (2)
calc.subtract = function(x,y) {
  console.log(x - y);
};

calc.subtract(12,2);

// (3)
calc.subtract = function(x,y) {
  console.log(x * y);
};

calc.subtract(7,7);

// (4)
calc.divide = function(x,y) {
  console.log(x / y);
};

calc.divide(10,2);

// Q9
function remainder(x,y) {
  let calc = x % y ;
  return calc;
}

const x = 5
const y = 3

console.log(x + 'を' + y + 'で割った余りは' + remainder(x ,y) + 'です。');

// Q10
// let(x)のスコープは関数fooの中までのため、スコープ外にあるconsole.logはスコープ内のlet(x)の値を参照できないためエラーが起きます。

// 応用問題
// Q1
let random = Math.random();
console.log(random);

// Q2
setTimeout(() => {
  console.log('Hello World!');
},
3000);

// Q3
let num = 0;
if(num > 0){
  console.log('num is greater than 0');
}else if (num < 0) {
  console.log('num is less than 0');
}else if (num === 0) {
  console.log('num is 0');
}

// Q4
let numbers = []

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] !== 'number') {
console.log('not number');
  }else if(mixed[i] % 2 == 0){
    console.log('even');
  } else {
    console.log('odd');
    
  }
};