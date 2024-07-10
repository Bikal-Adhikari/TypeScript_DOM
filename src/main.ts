class Contact {
  public id: number;
  public name: string;
  public phone: number;
  public isAbroad: boolean;
  constructor(id: number, name: string, phone: number, isAbroad: boolean) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.isAbroad = isAbroad;
  }
}

function addContact(): void {
  const nameInput: HTMLInputElement = document.getElementById(
    "name-input"
  ) as HTMLInputElement;
  const phoneInput: HTMLInputElement = document.getElementById(
    "phone-input"
  ) as HTMLInputElement;
  const name: string = nameInput.value;
  const phone: number = Number(phoneInput.value);
  console.log(name, phone);
}
