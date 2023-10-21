// Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(1990);

// Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(1992);

console.log(age1, age2);
