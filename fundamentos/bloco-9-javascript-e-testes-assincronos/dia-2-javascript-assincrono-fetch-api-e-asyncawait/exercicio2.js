const fetchCryptoCoins = async() => {
  const url = `https://api.coincap.io/v2/assets`;

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString())

    return coins;
}

console.log(fetchCryptoCoins());

const showCoins = async() => {
  const coins = await fetchCryptoCoins();

  const list = document.getElementById('coins-list');

  coins
  .filter((_, index) => index < 10)
  .forEach((coin) => {
    const newLi = document.createElement('li')
    newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`
    list.appendChild(newLi);
  })
}

window.onload = () => showCoins();