import IVehicle from "./IVehicle";

export default class Motorcycle implements IVehicle {
  constructor(color: string, year: number, engine: number) {
    this.configureMotorcycle(color, year, engine);
  }

  startVehicle(): void {
    console.log("Starting Vehicle");
  }

  configureMotorcycle(color: string, year: number, engine: number): void {
    console.log(
      `Configuring Motorcycle: color: ${color}, year: ${year}, engine: ${engine}`,
    );

    this.startVehicle();
  }

  configureCar(): void {
    throw new Error("Method not implemented.");
  }
}
