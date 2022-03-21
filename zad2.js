const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
    introduceYourself: "", // funkcja zamiast pustego stringa
  },
];

const people2 = people.map(function (value) {
  return {
    firstName: value.firstName,
    lastName: value.lastName,
    nickname: value.nickname,
    introduceYourself: function () {
      return `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}]`;
    },
  };
});
// console.log(people2[0].introduceYourself());

people2.forEach(function (value, index) {
  console.log(people2[index].introduceYourself());
});
