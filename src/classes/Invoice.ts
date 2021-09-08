import { HasFormatter } from "../interfaces/HasFormatter.js"


// export class Invoice { 
// turned into the one below restricting even further with the usage of the interface
// now it must have the format method that we have in the interface in this class
// which it has
export class Invoice implements HasFormatter { 
  constructor( 
    readonly client: string, 
    private details: string, 
    public amount: number
  ) {}
  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}