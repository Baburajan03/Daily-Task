class Person {
    constructor(name, age, address, mobile,email) {
      this.name = name
      this.age = age
      this.address = address
      this.mobile = mobile
      this.email = email
    }
 
   details()  {
  console.log(`Details of ${this.name} :\n Age    : ${this.age} years old \n Address: ${this.address} \n Mobile : ${this.mobile} \n Email  : ${this.email} `)
    }
  }
  let babu = new Person("Babu", 25, "No.123, xxx street, yyy district, zzz state", "90000000000", "xyz@gmail.com")
  let ramesh = new Person("Ramesh",30, "No.567, aaa street, bbb district, ccc state", "9111111111", "abc@gmail.com")
  babu.details()
  ramesh.details()
 

