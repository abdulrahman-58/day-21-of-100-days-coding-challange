// Assalamualaikum @everyone 👋
// 🚀 Day 21 Challenge: Start Coding! 🚀
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Car"] = 0] = "Car";
    Vehicles[Vehicles["Truck"] = 1] = "Truck";
    Vehicles[Vehicles["Motorcycle"] = 2] = "Motorcycle";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.Truck);
console.log("\n");
var student = {
    name: "Ali",
    age: 19,
    courses: ["English", "Islamiat", "Mathematics"],
};
console.log(student);
console.log("\n");
var circle = {
    kind: "circle",
    radius: 7,
};
var rectangle = {
    kind: "rectangle",
    width: 6,
    height: 18,
};
console.log(circle);
console.log(rectangle);
