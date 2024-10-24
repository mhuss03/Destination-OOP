class Bag {
  #owner;
  constructor(weight, id, owner) {
    this.weight = weight;
    this.id = id;
    this.#owner = owner;
  }
  getOwner() {
    return this.#owner;
  }
  assignOwner(owner) {
    this.#owner = owner;
  }
}

module.exports = Bag;
