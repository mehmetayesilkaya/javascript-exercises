const findTheOldest = function (people) {
  people.sort((a, b) => {
    const currentYear = new Date().getFullYear();
    const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
    const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
    return ageB - ageA;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
