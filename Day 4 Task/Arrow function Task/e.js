// e. Return all the palindromes in an array

let a = ["hello","racecar","nun","civic","queen"]
let d = yes =>{
    let palindrome = []

for(i=0;i<yes.length;i++)
{
    let correctword = yes[i].split("").reverse().join("")
    if(correctword === yes[i])
    {
        palindrome.push(yes[i])
    }
}
console.log(palindrome)
}
return d(a)
