export default interface IVehicle {
  startVehicle(): void;
  configureCar(
    color: string,
    year: number,
    engine: number,
    seats: number,
  ): void;
  configureMotorcycle(color: string, year: number, engine: number): void;
}
