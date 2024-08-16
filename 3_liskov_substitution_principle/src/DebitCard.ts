import BankCard from "./BankCard";

export default class DebitCard extends BankCard {
  validatePaymentMehod(): void {
    console.log("Validating account balance...");
  }
}
