const people = {
  firstName: "Szymon",
  lastName: "Cichonski",
  nickname: "Szymi",
};

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

getFavouriteColor = (person, num) => {
  let letter = 0;
  let index;

  if (typeof num !== "number") {
    num = 5;
  }
  if (num > 30) {
    console.log("podałeś za dużą liczbę, liczba nie może być większa niż 30");
  } else if (num < 1) {
    console.log("podałeś za małą liczbę, liczba nie może być mniejsza niż 1");
  } else {
    for (let key in person) {
      letter += person[key].length;
    }
  }

  index = Math.abs(letter - num) % colors.length;

  return colors[index];
};
// console.log(getFavouriteColor(people, 5));

const peoples = [
  { firstName: "Kuba", lastName: "Nowak", nickname: "Jakub" },
  {
    firstName: "Szymon",
    lastName: "Cichonski",
    nickname: "Szymi",
  },
  { firstName: "Ola", lastName: "Kowalska", nickname: "Kowal" },
];

for (let key of peoples) {
  console.log(`
  ${key.firstName} - ulubiony kolor - ${getFavouriteColor(key, 1)}
  `);
}
