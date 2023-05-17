// a. Print odd numbers in an array

let userInput = [1,2,3,4,5,6,7,8,9,10]
  let a = (b) => {
    
    for(let i=0;i<b.length;i++)
    {
        if((b[i]%2) !==0)
        {
        console.log(b[i])
        }
    }
    }
    return a(userInput)

