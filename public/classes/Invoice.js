// export class Invoice { 
// turned into the one below restricting even further with the usage of the interface
// now it must have the format method that we have in the interface in this class
// which it has
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
