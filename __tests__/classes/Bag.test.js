import Bag from "../../classes/Bag";

describe("Bag", () => {
  it("should create a bag with correct fields", () => {
    const bag = new Bag(10, 1, "John");
    expect(bag).toBeDefined();
    expect(bag.weight).toBe(10);
    expect(bag.id).toBe(1);
    expect(bag.getOwner()).toBe("John");
  });

  it("should assign a new owner to the bag", () => {
    const bag = new Bag(10, 1, "John");
    bag.assignOwner("Alice");
    expect(bag.getOwner()).toBe("Alice");
  });
});
