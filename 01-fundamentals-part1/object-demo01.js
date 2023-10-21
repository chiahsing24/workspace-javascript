let jonas = {
  firstName: "Jonas",
  lastName: "Smith",
  birthYear: 1986,
  job: "software engineer",
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getProfile: function () {
    return `${this.firstName} ${
      this.lastName
    } is a ${this.calcAge()} year-old ${this.job}.`;
  },
};

const jonasSummary = jonas.getProfile();

console.log("Jonas intro: ", jonasSummary);
