// c. Sum of all numbers in a array

 let userInput = [1,2,3,4,5,6,7,8,9,10];
  (function() {
    let sum = 0
    for(let i=0;i<userInput.length;i++)
    {
        sum = sum + userInput[i]
        
    }
    console.log(sum)
    })(userInput)
