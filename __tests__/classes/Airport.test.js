import Airport from "../../classes/Airport";
import Plane from "../../classes/Plane";

describe("Airport", () => {
  it("should create an airport with correct fields", () => {
    const airport = new Airport("Los Angeles International", "LAX", []);
    expect(airport).toBeDefined();
    expect(airport.name).toBe("Los Angeles International");
    expect(airport.airportCode).toBe("LAX");
    expect(airport.getPlanes()).toEqual([]);
  });

  it("should add a plane to the airport", () => {
    const airport = new Airport("Los Angeles International", "LAX", []);
    const plane = new Plane("Airbus", "LAX", "SFO", []);
    airport.addPlane(plane);
    expect(airport.getPlanes()).toContain(plane);
    expect(airport.getPlanes().length).toBe(1);
  });
});
