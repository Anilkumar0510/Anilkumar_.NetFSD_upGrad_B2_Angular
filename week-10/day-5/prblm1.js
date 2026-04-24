"use strict";
function getFirstElement(items) {
    return items[0];
}
class DataManager {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const userManager = new DataManager();
userManager.add({ id: 1, name: "Jahnavi" });
userManager.add({ id: 2, name: "Nihal" });
const productManager = new DataManager();
productManager.add({ id: 1, title: "Laptop" });
productManager.add({ id: 2, title: "Phone" });
console.log("First User:", getFirstElement(userManager.getAll()));
console.log("All Users:", userManager.getAll());
console.log("First Product:", getFirstElement(productManager.getAll()));
console.log("All Products:", productManager.getAll());
