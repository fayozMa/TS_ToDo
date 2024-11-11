// exercise 1
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
  }
  
  const Student: Person = {
    name: "John Doe",
    age: 25,
    isStudent: false,
  };
  
  interface Books {
    title: string;
    author: string;
    publishedYear: number;
  }
  
  const Book: Books = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  };
  
  // exercise 2
  const numbers: number[] = [1, 2, 3, 4, 5];
  
  function sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  const fruits: string[] = ["apple", "banana", "cherry"];
  
  function bigFruits(fruits: string[]): string[] {
    return fruits.map((fruit) => fruit.toUpperCase());
  }
  
  // exercise 3
  const StudentRecord: [string, number, boolean] = ["Alice", 22, true];
  
  const Cordinate: [number, number] = [10, 20];
  
  // exercise 4
  const idk: any = "string";
  
  const arr: any[] = ["hello", 2, true, idk];
  
  function print(arr: any[]) {
    return arr.forEach((item) => console.log(item));
  }
  
  // exercise 5
  let unk: unknown = 5;
  unk = "hello";
  
  function print2(unk: unknown) {
    if (typeof unk === "string") {
      console.log(unk.length);
    }
  }
  
  // 6. never
  function throwError(message: string): never {
    throw new Error(message);
  }
  
  function runForever(): never {
    while (true) {
      //infinite loop
    }
  }
  
  // 7. Functions
  function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  
  // 8. Enum
  enum DaysOfWeek {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
  }
  
  function printDay(day: DaysOfWeek): void {
    console.log(day);
  }
  
  // exercise 9
  interface Person2 {
    name: string;
    age: number;
  }
  
  interface Employee {
    employeeId: number;
    department: string;
  }
  
  type Workers = Person2 & Employee;
  
  const worker: Workers = {
    name: "Jane Doe",
    age: 30,
    employeeId: 12345,
    department: "HR",
  };
  
  // exercise 10
  interface Vehicle {
    make: string;
    model: string;
    year: number;
  }
  
  interface Car extends Vehicle {
    numberOfDoors: number;
    isElectric: boolean;
  }
  
  const car: Car = {
    make: "Tesla",
    model: "Model S",
    year: 2024,
    numberOfDoors: 4,
    isElectric: true,
  };
  
  // exercise 11
  type Address = {
    street: string;
    city: string;
    postalCode: string;
  };
  
  type PersonWithAddress = Person2 & {
    address: Address;
  };
  
  const personWithAddress: PersonWithAddress = {
    name: "Mark",
    age: 28,
    address: {
      street: "Main St",
      city: "Springfield",
      postalCode: "12345",
    },
  };
  
  // exercise 12
  interface Student {
    name: string;
    age: number;
    grades: number[];
    address: [string, number];
  }
  
  function getStudentSummary(student: Student): string {
    const averageGrade =
      student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    return `${student.name}, Age: ${student.age}, Average Grade: ${averageGrade.toFixed(2)}`;
  }
  
  // exercise 13
  enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
  }
  
  interface Order {
    orderId: number;
    status: OrderStatus;
    totalAmount: number;
  }
  
  interface Customer {
    customerId: number;
    name: string;
  }
  
  type CustomerOrder = Order & Customer;
  
  const customerOrder: CustomerOrder = {
    orderId: 456,
    status: OrderStatus.Shipped,
    totalAmount: 150.0,
    customerId: 789,
    name: "Sarah",
  };
  