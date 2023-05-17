// Comparison of two JSON have the same properties without order


let obj1 ={ name: "Person 1" , age: 5}
let obj2 = { age: 5 , name: "Person 1"}

let temp = true
for(let i in obj1)
{
    if(obj1[i] !== obj2[i])
    {
        temp = false
    }
}
if(temp == true)
console.log("Equal")
else
console.log("Not Equal")

// Another Method

// let keys = Object.keys(obj1)
// let temp = true
// for(let i of keys)
// {
//     if(obj1[i] !== obj2[i])
//     {
//         temp = false
//     }
// }
// if(temp == true)
// console.log("Equal")
// else
// console.log("Not Equal")


