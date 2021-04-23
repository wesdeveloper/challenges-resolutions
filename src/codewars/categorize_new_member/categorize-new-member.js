const openOrSenior = (data) => {
  const members = data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return 'Senior';
    }

    return 'Open';
  });

  return members;
};

module.exports = openOrSenior;
