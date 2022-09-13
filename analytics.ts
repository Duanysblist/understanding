console.log("Sending...")

class vendItem {
    cost: number;
    name: string;

    constructor(name: string, cost: number) {
        this.name = name;
        this.cost = cost;
    }

    getCost() : number {
        return this.cost;
    }
}

const penny = 1;
const nickel = 5;
const dime = 10;
const quarter = 25;

let items : [string, number][];
items = [["Snickers", 1.25], ["Kit-Kat", 2.00], ["Lays", 2.50], ["Fruit Snacks", 2.30]];

