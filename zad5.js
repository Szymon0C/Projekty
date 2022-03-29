//do zrobienia jeszcze!!!//

// e) zredukuj tablicę obiektów do pojedynczego obiektu, który będzie zawierajał wszystkie klucze i wartości
// wszystkich obiektów z tablicy, dzięki temu, że w punkcie d) odwrócilismy klucze z wartościami, nie będzie
// z tym problemu :)
// *f) odtwórz z obiektu tablicę, która będzie zawierała same nicknames i
// nazwiska, których każda litera jest < s i
// imię, którego chociaż jedna litera jest większa >= s
// g) posortuj tablicę alfabetycznie
// *

const arr = [
  {
    firstName: "Bartolome",
    lastName: "Lozano",
    nickname: "Rabona",
    introduceYourself: "",
    getFavouriteColor: "",
  },
  {
    firstName: "Ola",
    lastName: "Lozanoa",
    nickname: "Rabona",
    introduceYourself: "",
    getFavouriteColor: "",
  },
  {
    firstName: "Ewa",
    lastName: "Lozanow",
    nickname: "Rbon",
    introduceYourself: "", // funkcja zamiast pustego stringa
    getFavouriteColor: "", // funkcja zamiast pustego stringa
  },
];

//obliczanie isElite
let isElite = false;
function primeNum(num) {
  let divider = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divider.push(i);
    }
  }
  if (divider.length > 2) {
    // return isElite;

    if (num % 3 === 0 || num % 5 === 0) {
      return !isElite;
    } else {
      return isElite;
    }
  } else {
    return !isElite;
    //liczba pierwsza
  }
}
function removeUselessFunctions(arr) {
  result = arr.map((value) => {
    return {
      firstName: value.firstName,
      lastName: value.lastName,
      nickname: value.nickname,
    };
  });
  return result;
}
function swappedObj(arr) {
  let newObj = removeUselessFunctions(arr);
  let swapped = [];
  for (let key of newObj) {
    swapped.push(
      Object.fromEntries(Object.entries(key).map((a) => a.reverse()))
    );
  }
  return swapped;
}
function newObj(arr) {
  let result = removeUselessFunctions(arr);
  let result2 = swappedObj(result);
  return result2;
}

const arrFinal = arr.filter((value) => {
  let lastChar = value.firstName[value.firstName.length - 1];
  let num = Math.floor(Math.random() * 101);
  isElite = primeNum(num);
  if (isElite === true) {
    return value;
  } else {
    if (
      (lastChar === "a" || lastChar === "o") &&
      value.lastName.length > 6 &&
      value.nickname.includes("a")
    ) {
      return value;
    }
  }
});
const arrFinal2 = newObj(arrFinal);
console.log(arrFinal2);
