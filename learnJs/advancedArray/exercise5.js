// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" 
//to each of the usernames

let arr1 = [];

array.forEach(item => arr1.push(item.username + '!'));


//Create an array using map that has all the usernames with a 
//"? to each of the usernames
const arr2 = array.map(item => item.username + '?');

//Filter the array to only include users who are on team: red
const arr3 = array.filter(item => item.team == "red");

//Find out the total score of all users using reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue.score;
let score = array.reduce(reducer, 0);


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  //console.log(num, i);
  //alert(num);
  return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end 
//of each items they own.

let arr5 = [];

array.forEach(item => {
  var obj1 = JSON.parse(JSON.stringify(item));
  obj1.items = obj1.items.map((val) => val + '!');
  arr5.push(obj1);
}
);
