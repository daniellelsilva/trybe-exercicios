const wakeUp = () => 'Acordando!'
const breakfast = () => 'Bora tomar café!';
const sleep = () => 'Partiu dormir!';

const doingThis = (func) => {
  const result = func();
  console.log(result);
} 

doingThis(wakeUp);
doingThis(breakfast);
doingThis(sleep);