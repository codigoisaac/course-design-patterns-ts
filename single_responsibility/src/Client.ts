export default class Client {
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  create(): void {
    console.log("Client created");
  }

  read(): void {
    console.log("Client read");
  }

  update(): void {
    console.log("Client updated");
  }

  delete(): void {
    console.log("Client deleted");
  }
}
