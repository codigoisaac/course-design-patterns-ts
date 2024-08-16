export default interface IPayment {
  validatePaymentMehod(): void;
  makePayment(): void;
}
