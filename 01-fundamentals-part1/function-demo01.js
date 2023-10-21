// Function declaration
// Function that can be used before it's declared
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(1990);

// Function expression
// Essentially a function value stored in a variable
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(1992);

console.log(age1, age2);

// Arrow function
// Great for a quick one-line function, has no "this" keyword
const calcAge3 = (birthYear) => 2023 - birthYear;

const age3 = calcAge3(1985);
