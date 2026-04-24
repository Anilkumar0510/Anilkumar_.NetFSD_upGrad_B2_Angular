class Employee {
  constructor(
    public id: number,
    protected name: string,
    private salary: number
  ) {}

  getSalary(): number {
    return this.salary;
  }

  setSalary(value: number): void {
    if (value > 0) {
      this.salary = value;
    }
  }

  displayDetails(): void {
    console.log(`ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    salary: number,
    public teamSize: number
  ) {
    super(id, name, salary);
  }

  displayDetails(): void {
    console.log(`ID: ${this.id}, Team Size: ${this.teamSize}`);
  }
}

const emp = new Employee(1, "Jahnavi", 30000);
emp.displayDetails();

const mgr = new Manager(2, "Ravi", 50000, 5);
mgr.displayDetails();