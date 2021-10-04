// EXercicio 1:
const infoEmployees = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return `${email}@trybe.com`
};
console.log(infoEmployees('Pedro GUerra'));

const newEmplyees = () => {
  const employees = {
    id1: infoEmployees('Pedro Guerra'),
    id2: infoEmployees('Luiza Drumond'),
    id3: infoEmployees('Carla Paiva'),
  }
  return employees;
};

console.log(newEmplyees());


// EXercicio 2:

const checkNumbers = (myNumber, number) => myNumber === number;

const lotteryNumber = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Parabens você ganhou' : 'Tente novamente'
}
console.log(lotteryNumber(4, checkNumbers));

