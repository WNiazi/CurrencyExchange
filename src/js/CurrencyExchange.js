export default class CurrencyExchange {  
  static  getConversion(fromCurrencyCode, toCurrencyCode) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${fromCurrencyCode}/${toCurrencyCode}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}

// • Substitute `GBP` with the code you want to use as a target currency.
// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP
// "base_code": "USD",
// "target_code": "INR",
// "conversion_rate": 74.1685