import BankCard from "./BankCard";

export default class CreditCard extends BankCard {
  validatePaymentMehod(): void {
    console.log("Validating credit limit...");
  }
}
