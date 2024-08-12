import Client from "./Client";

export default class EmailSender {
  constructor(private client: Client) {}

  sendEmail(): void {
    this.client.email;

    console.log(`Email sent for client at ${this.client.email}`);
  }
}
