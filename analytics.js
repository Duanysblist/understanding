"use strict";
console.log("Sending...");
class vendItem {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
    getCost() {
        return this.cost;
    }
}
const penny = 1;
const nickel = 5;
const dime = 10;
const quarter = 25;
let items;
items = [["Snickers", 1.25], ["Kit-Kat", 2.00], ["Lays", 2.50], ["Fruit Snacks", 2.30]];
