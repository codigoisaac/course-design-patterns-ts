import Client from "./Client";
import EmailSender from "./EmailSender";

const title: string = "Single Responsibility Principle!";

console.log(`Hello ${title}`);

const client = new Client("isaacmuniz@protonmail.com");
const emailSender = new EmailSender(client);

emailSender.sendEmail();
