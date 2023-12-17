const Animal = require('../zoo')
const { Lion, Tiger, Wolf } = require('../zoo/animals')

describe('Animal Class', () => {

  it('Should create an empty instance', () => {
    const animal = new Animal({})
    expect(animal.name).toEqual(undefined)
    expect(animal.sound).toEqual(undefined)
  })

  it('The instance should have its attributes', () => {
    const lion = new Lion()
    const tiger = new Tiger()

    expect(lion.name).toEqual('lion')
    expect(lion.sound).toEqual('roar')
    expect(tiger.name).toEqual('tiger')
    expect(tiger.sound).toEqual('grrr')
  })

  describe('Speak function', () => {
    const lion = new Lion(),
          tiger = new Tiger(),
          wolf = new Wolf()

    it('Should return example sentences', () => {
      expect(lion.speak("I'm a lion")).toEqual("I'm roar a roar lion roar")
      expect(tiger.speak("Lions suck")).toEqual("Lions grrr suck grrr")
    })

    it.each([
      { 
        animal: lion, 
        sentence: "Ever roared so loud the whole jungle shook?", 
        expected: "Ever roar roared roar so roar loud roar the roar whole roar jungle roar shook roar?" 
      },
      { 
        animal: tiger, 
        sentence: "Absolutely, my roar scares birds.", 
        expected: "Absolutely grrr, my grrr roar grrr scares grrr birds grrr." 
      },
      { 
        animal: wolf, 
        sentence: "I prefer a mysterious howl, echoing through the forests.", 
        expected: "I auuu prefer auuu a auuu mysterious auuu howl auuu, echoing auuu through auuu the auuu forests auuu." 
      },
    ])('$animal.name should speak', ({animal, sentence, expected}) => {
      expect(animal.speak(sentence)).toEqual(expected)
    })

    it('Should return an empty string if sent one.', () => {
      expect(lion.speak("")).toEqual("")
    })

    it('Should throw an error if no argument is sent', () => {
      expect(() => lion.speak()).toThrow("Argument toSay is required")
    })

    it('Should throw an error if no sound is set', () => {
      expect(() => new Animal({}).speak("I'm an unknown animal")).toThrow("I need a sound to speak")
    })
  })
})