import IVehicle from "./IVehicle";

export default class Car implements IVehicle {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configureCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.log("Starting Vehicle");
  }

  configureCar(
    color: string,
    year: number,
    engine: number,
    seats: number,
  ): void {
    console.log(
      `Configuring Car: color: ${color}, year: ${year}, engine: ${engine}, seats: ${seats}`,
    );

    this.startVehicle();
  }

  configureMotorcycle(): void {
    throw new Error("Method not implemented.");
  }
}
