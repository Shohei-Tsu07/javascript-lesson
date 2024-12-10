// Q1
let nickname = "ごっしー";
let age = 28;
let greet = "私のニックネームは" + nickname + "です。" + "年齢は" + age + "歳です。";

console.log(greet);

// Q2
let languages = [
  "JavaScript", 
  "PHP",
  "Ruby",
  "Python",
  "Go",
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
  let text = "Hello"
  console.log(text);
  
}

sayHello();

// (2)
const sayWorld = function() {
  return "World"
}

console.log(sayWorld());




