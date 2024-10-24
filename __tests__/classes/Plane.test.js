import Plane from "../../classes/Plane";
import Person from "../../classes/Person";

describe("Plane", () => {
  it("should create a plane with correct fields", () => {
    const plane = new Plane("Boeing", "LAX", "JFK", []);
    expect(plane).toBeDefined();
    expect(plane.company).toBe("Boeing");
    expect(plane.origin).toBe("LAX");
    expect(plane.destination).toBe("JFK");
    expect(plane.getPassengers()).toEqual([]);
  });

  it("should add a passenger to the plane", () => {
    const plane = new Plane("Boeing", "LAX", "JFK", []);
    const passenger = new Person("Bob", "JFK", []);
    plane.addPassenger(passenger);
    expect(plane.getPassengers()).toContain(passenger);
    expect(plane.getPassengers().length).toBe(1);
  });
});
