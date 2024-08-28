import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {
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
}
