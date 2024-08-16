import IPayment from "./IPaymentMethod";

export default abstract class BankCard implements IPayment {
  validatePaymentMehod(): void {
    console.log("Validating payment method...");
  }

  makePayment(): void {
    console.log("Making payment...");
  }
}
