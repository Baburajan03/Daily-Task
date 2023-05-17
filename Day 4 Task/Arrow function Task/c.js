// c. Sum of all numbers in an array

let userInput = [1,2,3,4,5,6,7,8,9,10]
let a = b => {
  let sum = 0
  for(let i=0;i<b.length;i++)
  {
      sum = sum + userInput[i]
      
  }
  console.log(sum)
  }
  return a(userInput)
