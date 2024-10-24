import Person from "../../classes/Person";
import Bag from "../../classes/Bag";

describe("Person", () => {
  it("should create a person with correct fields", () => {
    const person = new Person("Alice", "New York", []);
    expect(person).toBeDefined();
    expect(person.name).toBe("Alice");
    expect(person.destination).toBe("New York");
    expect(person.getBags()).toEqual([]);
  });

  it("should add a bag to the person", () => {
    const person = new Person("Alice", "New York", []);
    const bag = new Bag(15, 2, "Alice");
    person.addBag(bag);
    expect(person.getBags()).toContain(bag);
    expect(person.getBags().length).toBe(1);
  });
});
