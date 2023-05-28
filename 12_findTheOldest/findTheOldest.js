const findTheOldest = function (people) {
  currentYear = new Date().getFullYear();
  const oldest = people.reduce((oldest, currentPerson) => {
    const oldestAge =
      oldest.yearOfDeath === undefined
        ? currentYear - oldest.yearOfBirth
        : oldest.yearOfDeath - oldest.yearOfBirth;
    const currentAge =
      currentPerson.yearOfDeath === undefined
        ? currentYear - currentPerson.yearOfBirth
        : currentPerson.yearOfDeath - currentPerson.yearOfBirth;

    return oldestAge > currentAge ? oldest : currentPerson;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
