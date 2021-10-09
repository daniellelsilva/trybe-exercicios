const sum = (...numbers) => numbers.reduce(((acumulador, currentValue) => acumulador + currentValue), 0);

console.log(sum(1, 1, 2, 3));