const requiredArg = arg => { 
  throw new Error(`Argument ${arg} is required`) 
}

class Animal {
  constructor({name, sound}) {
    this.name = name
    this.sound = sound
  }

  speak(toSay = requiredArg("toSay")) {
    if (!this.sound) {
      throw new Error("I need a sound to speak")
    }

    // Replace all words (includes contracted words) with themselves and the animal sound
    // ([A-Za-z])+('[A-Za-z]+) - matches words with apostrophes (e.g. "I'm")
    // ([A-Za-z]+) - matches words without apostrophes (e.g. "lion")
    return toSay.replace(new RegExp("(([A-Za-z])+('[A-Za-z]+)|([A-Za-z]+))", "g"), `$& ${this.sound}`)
  }
}

module.exports = Animal
