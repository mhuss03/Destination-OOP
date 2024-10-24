class Person {
  #bags;
  constructor(name, destination, bags) {
    this.name = name;
    this.destination = destination;
    this.#bags = [];
  }
  getBags() {
    return this.#bags;
  }
  addBag(bag) {
    this.#bags.push(bag);
  }
}

module.exports = Person;
