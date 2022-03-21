const colors = ["red", "green", "yellow", "blue", "pink", "orange", "grey"];

const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
  },
];
const people2 = people.map(function (value) {
  return {
    firstName: value.firstName,
    lastName: value.lastName,
    nickname: value.nickname,
    getFavouriteColor: function (num) {
      if (typeof num === "string" || typeof num === "undefined") {
        num = 5;
        let letters = people.map(function (value, index) {
          return (
            value.firstName.length +
            value.lastName.length +
            value.nickname.length
          );
        });
        let number = letters - num;
        let index = number % colors.length;
        console.log(colors[index]);
      } else {
        if (num < 1) {
          console.log(
            "podałeś za małą liczbę, liczba nie może być mniejsza niż 1"
          );
        } else if (num > 30) {
          console.log(
            " podałeś za dużą liczbę, liczba nie może być większa niż 30"
          );
        } else {
          let letters = people.map(function (value, index) {
            return (
              value.firstName.length +
              value.lastName.length +
              value.nickname.length
            );
          });
          let number = letters - num;
          let index = number % colors.length;

          console.log(colors[Math.abs(index)]);
        }
      }
    },
  };
});

for (let i = 0; i < 32; i++) {
  console.log(i);
  people2[0].getFavouriteColor(i);
}
people2[0].getFavouriteColor();
