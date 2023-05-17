class Uberprice {
    constructor(baseFare, costPerKilometer) {
      this.baseFare = baseFare
      this.costPerKilometer = costPerKilometer
    }
    calculatePrice(distance) {
      let price = this.baseFare + (distance * this.costPerKilometer)
      return price;
    }
  }
  let calculator = new Uberprice(5, 2)
  let distance = 10
  let price = calculator.calculatePrice(distance)
  
  console.log(`Distance in km: ${distance}\nPrice : $${price}`)
  