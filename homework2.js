//zad.6//

//a//
const a = 5;
let b = a;
//gdy zmienimy wartosc zmiennej 'b' wartosc 'a' pozstanie taka sama//
b = b + 5;
console.log(b);
console.log(a);

//typy zlozone//
const c = [1];
let d = c;
//gdy dodamy kolejny element do tablicy 'd' to w 'c' takze ta zmianna nastapi//
d.push(2);
console.log(c);
//a//

const person = {
  firstName: "Kamil",
  lastName: "Nowak",
  age: 25,
  drivingLicence: true,
  drunk: true,
};
if (person.age > 18 && person.drivingLicence && person.drunk === false) {
  console.log("Mozna jechac samochodem");
} else {
  console.log("Jazda samochodem jest zabroniona");
}

const car = {
  name: "mustang",
  productionYear: 2020,
  color: "red",
};

const result = `Moje auto to ${car.name} i zostało wyprodukowane w roku ${car.productionYear}`;
console.log(result);

// if (isAdult === true) {
//   return "Możesz kupić alkohol";
// } else if (isAdult === false) {
//   return "Nie możesz kupić alkoholu, jesteś nieletni!";
// }
const isAdult = true;
//1st option//
isAdult === true
  ? console.log("Możesz kupić alkohol")
  : console.log("Nie możesz kupić alkoholu, jesteś nieletni!");

//2nd option//
if (isAdult) {
  console.log("Możesz kupić alkohol");
} else {
  console.log("Nie możesz kupić alkoholu, jesteś nieletni!");
}
