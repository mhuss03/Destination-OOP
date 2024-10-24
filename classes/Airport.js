class Airport {
  #planes;

  constructor(name, airportCode, planes) {
    this.name = name;
    this.airportCode = airportCode;
    this._planes = [];
  }
  getPlanes() {
    return this._planes;
  }
  addPlane(plane) {
    this._planes.push(plane);
  }
}

module.exports = Airport;
