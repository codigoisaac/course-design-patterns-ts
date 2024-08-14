import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number,
  ) {
    this.configure(color, year, engine, seats, doors);
  }

  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number,
  ): void {
    console.log(
      `Creating a car: ${color}, ${year}, with a ${Number(engine).toFixed(
        1,
      )} engine, ${doors} doors, and ${seats} seats.`,
    );

    this.startVehicle();
  }

  startVehicle(): void {
    console.log("Starting the car...");
  }
}
