import TypeVehicle from "./TypeVehicle";
import Vehicle from "./vehicles/Vehicle";

const type = TypeVehicle.CAR;
let vehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Vehicle("Amarelo", 2022, 2.0, 2.0, 4);
  vehicle.car();
} else if (type === TypeVehicle.MOTORCYCLE) {
  //! Dirty code
  //! Motorcycles always have 1 seat, and do not have doors.
  vehicle = new Vehicle("Vermelho", 2022, 1.0, 1, 0);
  vehicle.motorcycle();
}
