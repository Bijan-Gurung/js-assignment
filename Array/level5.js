const arr = [2,5,6,7]
//calculate the sum of the array using either for of or for in
let sum = 0
for(let item of arr){
  sum = sum +item
}
for(let item in arr){
  sum = sum + arr[item]
}


//high level
const users =['hari', 'shyam', 'hari']
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate
function removeDuplicates(users){
    return [...new Set(users)]
  }
  console.log(removeDuplicates(users))

const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array
let sum = 0
for(let innerarray of newArr){
  for(let array of innerarray){
    console.log(array)
    if(array % 2 !==0){
      sum = sum + array
    }
  }
}
console.log(sum)
const array = newArr.flat()
console.log(array)
for(let item of array){
  if(item % 2 !==0){
    sum = sum +item
  }
}
console.log(sum)

const myDetails = [
    {id:3, name: 'hari'},
    {id:5, name: 'shyam'},
    {id:6, name: 'gopal'},
  ]
const id = myDetails.map(item=>item.id)
console.log(id)
  
// return only array of ids: expected output  [3,5,6]


const userDetails= [
    {score: 0, name:'hari', marks: [10,3,23]},
    {score: 0, name:'shyam', marks: [50,23,23]},
    {score: 0, name:'shyam',marks: [20,13,43]},
]
userDetails.forEach((item => {
  const totalScore = item.marks.reduce((a,b) => a + b, 0);
  item.score = totalScore;
}));

console.log(userDetails);
//loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]
