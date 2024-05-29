// Assalamualaikum @everyone 👋

// 🚀 Day 21 Challenge: Start Coding! 🚀

// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
enum Vehicles {
  Car,
  Truck,
  Motorcycle,
}
console.log(Vehicles.Truck);
console.log(`\n`);

//  Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
interface Student {
  name: string;
  age: number;
  courses: string[];
}
let student: Student = {
  name: "Ali",
  age: 19,
  courses: ["English", "Islamiat", "Mathematics"],
};
console.log(student);
console.log(`\n`);

//  Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
type Shape = {
  kind: "circle" | "rectangle";
  radius?: number;
  width?: number;
  height?: number;
};
let circle: Shape = {
  kind: "circle",
  radius: 7,
};
let rectangle: Shape = {
  kind: "rectangle",
  width: 6,
  height: 18,
};
console.log(circle);
console.log(rectangle);
