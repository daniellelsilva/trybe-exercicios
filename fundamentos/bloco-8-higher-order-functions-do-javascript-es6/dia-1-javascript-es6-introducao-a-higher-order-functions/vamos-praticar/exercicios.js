const infoEmployees = (fullName, email) => {
  const obj = {
    name: fullName,
    email: email,
  }
  return obj;
};


const newEmplyees = () => {
  const employees = {
    id1: infoEmployees('Pedro Guerra', 'email@email.com'),
    id2: infoEmployees('Luiza Drumond', 'email@email.com'),
    id3: infoEmployees('Carla Paiva', 'email@email.com'),
  }
  return employees;
};

console.log(newEmplyees());