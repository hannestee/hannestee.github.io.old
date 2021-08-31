const priceElement = document.querySelector('#price');
const timeBar = document.querySelector('.round-time-bar');
const fetchBitcoinPriceAxios = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        //console.log(res.data.ticker.price)
        priceElement.innerHTML = res.data.ticker.price
    } catch(e) {
        console.log(e)
    }
}

fetchBitcoinPriceAxios()

setInterval( () => {  
        fetchBitcoinPriceAxios();
        timeBar.classList.remove('fade')
        timeBar.classList.remove('round-time-bar');
        timeBar.offsetWidth;
        timeBar.classList.add('round-time-bar');
        timeBar.classList.add('fade')
}, 60000);