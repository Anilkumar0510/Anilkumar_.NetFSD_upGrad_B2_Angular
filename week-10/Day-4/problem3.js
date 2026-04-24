"use strict";
class Employee {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(value) {
        if (value > 0) {
            this.salary = value;
        }
    }
    displayDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(id, name, salary, teamSize) {
        super(id, name, salary);
        this.teamSize = teamSize;
    }
    displayDetails() {
        console.log(`ID: ${this.id}, Team Size: ${this.teamSize}`);
    }
}
const emp = new Employee(1, "Jahnavi", 30000);
emp.displayDetails();
const mgr = new Manager(2, "Ravi", 50000, 5);
mgr.displayDetails();
