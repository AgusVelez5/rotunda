const Animal = require("./index")

class Lion extends Animal {
  constructor() {
    super({ name: "lion", sound: "roar" })
  }

  run() {
    console.log("I'm running")
  }
}

class Tiger extends Animal {
  constructor() {
    super({ name: "tiger", sound: "grrr" })
  }

  sleep() {
    console.log("I'm sleeping")
  }
}

class Wolf extends Animal {
  constructor() {
    super({ name: "wolf", sound: "auuu" })
  }

  eat() {
    console.log("I'm eating")
  }
}

module.exports = { 
  Lion, 
  Tiger,
  Wolf
}