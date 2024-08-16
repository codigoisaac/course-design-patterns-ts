import IPaymentMethod from "./IPaymentMethod";

export default class BankRewards implements IPaymentMethod {
  validatePaymentMehod(): void {
    console.log("Validating reward points...");
  }

  makePayment(): void {
    console.log("Making payment with rewards...");
  }
}
