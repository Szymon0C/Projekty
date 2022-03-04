//zad.1//
const name = "Jan";
const age = 22;
const isOpen = true;
const stringBoolean = "true";
const stringNumber = "100";

//zad.2//
console.log("Zad.2");
const result = 10 % 4;
console.log(result);

const name2 = "Tomasz";
const age2 = 33;
const message = `${name2} ma ${age2} lata`;
console.log(message);

const firstName = "Jan";
const lastName = "Kowalski";
const fullName = `${firstName} ${lastName}`;
const fullName2 = "Jan Kowalski";
console.log(fullName);
console.log(fullName2);

//zad.3//
const a = 7;
let b = a + 3 + 4;
console.log("Zad.3");
console.log(`${b} , ${a}`);

//zad.4//
const arrayOfNumbers = [1, 2, 3];
const arrayOfCars = ["Volvo", "Kia", "Seat"];
const arrayOfBools = [true, false, true];
const arrayOfNothing = [];
const arrayOfEverything = ["Szymon", 21, true, "Bydgoszcz", 2001];
console.log(arrayOfEverything[1]);
//***//
const arrayOfNumbers2 = [1, 2, 3, 4, 5, 6];
console.log(arrayOfNumbers2.length);
arrayOfNothing.unshift("elementPierwszy");
console.log(arrayOfNothing);

const arrayOfPeoples = [
  (person1 = {
    age: 20,
    firstName: "Kamil",
    lastName: "Nowak",
  }),
  (person2 = {
    age: 40,
    firstName: "Patryk",
    lastName: "Kowalski",
  }),
  (person3 = {
    age: 30,
    firstName: "Robert",
    lastName: "Lewandowski",
  }),
];
console.log(arrayOfPeoples[1].firstName);

let c = 2;
const array = [c];
console.log(array);

//zad.5//
console.log("Zad.5");
const emptyObject = {};
const person = {
  name: "Iza",
};
const personDetails = {
  name: "Szymon",
  lastName: "Cichonski",
  age: 21,
  drivingLicence: true,
};
console.log(personDetails.age);
console.log(personDetails);

const carDetails = {
  brand: "Seat",
  color: "blue",
  production: 2009,
  arrayOfSales: [2010, 2018, 2022],
};
