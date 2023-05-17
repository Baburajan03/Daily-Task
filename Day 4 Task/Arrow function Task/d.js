// d. Return all the prime numbers in an array

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let d = a =>{
  let result = []

  for (let i = 0; i < a.length; i++) {
    let isPrime = true

    if (a[i] === 1) {
      isPrime = false
    }

    for (let j = 2; j < a[i]; j++) {
      if (a[i] % j === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime == true) {
      result.push(a[i])
    }
  }
  console.log(result)
}
return d(array)
