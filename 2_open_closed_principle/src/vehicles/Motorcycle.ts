import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }

  configure(color: string, year: number, engine: number): void {
    console.log(
      `Creating a motorcycle: ${color}, ${year}, ${engine}cc engine.`,
    );

    this.startVehicle();
  }

  startVehicle(): void {
    console.log("Starting the motorcyle...");
  }
}
