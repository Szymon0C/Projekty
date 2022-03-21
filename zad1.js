firstNameNick = (arr, index) => {
  let name3 = [];
  let name = arr[index].firstName;
  if (name.length >= 3) {
    let name2 = name.split("");
    for (let i = 0; i < 3; i++) {
      name3.push(name2[i]);
    }
  } else {
    let name2 = name.split("");
    for (let i = 0; i < name.length; i++) {
      name3.push(name2[i]);
    }
  }
  return name3.reverse().join("").toLowerCase();
};

surnameNick = (arr, index) => {
  let surname3 = [];
  let surname = arr[index].lastName;
  if (surname.length >= 3) {
    let surname2 = surname.split("").reverse().join("");
    for (let i = 0; i < 3; i++) {
      surname3.push(surname2[i]);
    }
  } else {
    let surname2 = surname.split("").reverse().join("");
    for (let i = 0; i < surname.length; i++) {
      surname3.push(surname2[i]);
    }
  }
  return surname3.join("").toLowerCase();
};

test = (arr, i) => {
  let result = [];
  for (let key in arr) {
    result.push([firstNameNick(arr, key), surnameNick(arr, key)]);
  }

  nickname = result.map((value) => {
    return value.join("");
  });
  return nickname[i];
};

const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
];

let people2 = people.map((value, index) => {
  let nick = test(people, index);
  return {
    firstName: value.firstName,
    lastName: value.lastName,
    nickname: nick.charAt(0).toUpperCase() + nick.slice(1),
  };
});

console.log(people2);
