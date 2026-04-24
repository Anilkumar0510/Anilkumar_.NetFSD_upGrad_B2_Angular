function getFirstElement<T>(items: T[]): T {
  return items[0];
}

interface Repository<T> {
  add(item: T): void;
  getAll(): T[];
}

class DataManager<T> implements Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  title: string;
}

const userManager = new DataManager<User>();
userManager.add({ id: 1, name: "Jahnavi" });
userManager.add({ id: 2, name: "Nihal" });

const productManager = new DataManager<Product>();
productManager.add({ id: 1, title: "Laptop" });
productManager.add({ id: 2, title: "Phone" });

console.log("First User:", getFirstElement(userManager.getAll()));
console.log("All Users:", userManager.getAll());

console.log("First Product:", getFirstElement(productManager.getAll()));
console.log("All Products:", productManager.getAll());