const multi = (a) => {
  return (b) => {
    return a * b;
  };
};
console.log(multi(5)(6));

let multiplyBySix = multi(6);
console.log(multiplyBySix(10));

const multi2 = (a) => {
  return (b) => {
    return (c) => {
      return (d) => {
        return a * b * c * d;
      };
    };
  };
};
console.log(multi2(4)(5)(6)(10));
