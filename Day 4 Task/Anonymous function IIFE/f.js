// f. Return median of two sorted arrays of the same size

let a = [6,7,4,5,8,11];
let b = [1,3,2,9,10,12];
(function(d,e)
{
    let joinedarray = d.concat(e)
    let solvedarray = joinedarray.sort((d,e) => d -e) 
  
    let middle = Math.floor(solvedarray.length/2)
   
    if(((solvedarray.length%2)==0))
    {
        let median = (solvedarray[middle] + solvedarray[(middle - 1)])/2
        console.log(median)
    }
    else
    {
        median = solvedarray[middle]
        console.log(median)
    }
})(a,b);
