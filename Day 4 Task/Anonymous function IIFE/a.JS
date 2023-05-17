// a. Print odd numbers in an array

 let userInput = [1,2,3,4,5,6,7,8,9,10];
  (function() {
    
    for(let i=0;i<userInput.length;i++)
    {
        if((userInput[i]%2) !==0)
        {
        console.log(userInput[i])
        }
    }
    })(userInput)
