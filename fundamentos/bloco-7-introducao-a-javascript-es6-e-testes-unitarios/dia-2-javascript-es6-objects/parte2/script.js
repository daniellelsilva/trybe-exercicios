const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1
const addNigthShift = (object, key, value) => {
  object[key] = value;
}

addNigthShift(lesson2, 'turno', 'noite');
console.log(Object.entries(lesson2));


// Exercicio 2
const keyList = (object) => Object.keys(object);

console.log(keyList(lesson3));


// EXercicio 3
const objectSize = (object) => Object.keys(object).length;

console.log(objectSize(lesson3));


// EXercicio 4
const valueList = (object) => Object.values(object);

console.log(valueList(lesson3));


// EXercicio 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);


// EXercicio 6
const totalStudents = () => {
  const studentsLesson1 = allLessons.lesson1.numeroEstudantes;
  const studentsLesson2 = allLessons.lesson2.numeroEstudantes;
  const studentsLesson3 = allLessons.lesson3.numeroEstudantes;

  console.log(studentsLesson1 + studentsLesson2 + studentsLesson3);
}
totalStudents();


// EXercicio 7
const getValueByNumber = (object, number) => Object.values(object)[number];

console.log(getValueByNumber(lesson1, 0));


// EXercicio 8
const verifyPair = (object, key, value) => {
  if (object.hasOwnProperty(key) && Object.values(object).includes(value)){
    return true;
  } else {
    return false;
  }
  // return object.hasOwnProperty(key); 
}
console.log(verifyPair(lesson2, 'turno', 20))


