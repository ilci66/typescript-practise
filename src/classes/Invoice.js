"use strict";
exports.__esModule = true;
exports.Invoice = void 0;
// export class Invoice { 
// turned into the one below restricting even further with the usage of the interface
// now it must have the format method that we have in the interface in this class
// which it has
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
