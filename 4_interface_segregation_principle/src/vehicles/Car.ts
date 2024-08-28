import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {
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
}
