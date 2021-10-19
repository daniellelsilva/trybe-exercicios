// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    // Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};


window.onload = () => fetchJoke();