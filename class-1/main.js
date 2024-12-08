let arr = [1, 2, 3, 4, 5]; //Array of Integers
let arr2 = ["Ganesh", "Madhan"];
console.log(arr[0]);
console.log(arr2[1]);

//Objects
const users1 = {
  firstName: "Ganesh",
  gender: "Male",
  status: "Unmarried",
};

console.log(users1["firstName"]);

//Array containing Object
const allUsers = [
  {
    firstName: "Ganesh",
    gender: "Male",
  },{
    firstName: "Srinu",
    gender: "Male",
  }, {
    firstName: "Kamala",
    gender: "Female",
  },
];

for(let i = 0;i<allUsers.length;i++)
{
    if(allUsers[i]['gender'] == "Female")
    {
        console.log(allUsers[i]['firstName']+" : "+allUsers[i]['gender']);
    }
}

//Sum of Number Function

function findSum(a,b) //do things with input and return an output
{
    return a+b;
}

console.log(findSum(2,3));

const value = findSum(10,20);
const value2 = findSum(100,200);

console.log(value);
console.log(value2);



