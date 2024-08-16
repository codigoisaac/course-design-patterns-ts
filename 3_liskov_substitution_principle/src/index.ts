import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import BankRewards from "./BankRewards";

const creditCard = new CreditCard();

creditCard.validatePaymentMehod();
creditCard.makePayment();

const debitCard = new DebitCard();

debitCard.validatePaymentMehod();
debitCard.makePayment();

const bankRewards = new BankRewards();

bankRewards.validatePaymentMehod();
bankRewards.makePayment();
