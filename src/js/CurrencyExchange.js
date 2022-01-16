export default class CurrencyExchange {  
  static async getConversion(fromCurrencyCode, toCurrencyCode) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/89a0fdddabe5432a7021771e/pair/${fromCurrencyCode}/${toCurrencyCode}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

// static getExchangeRate(response, toCurrencyCode, fromCurrencyCode) {
//   response.conversion_rates[rates[i]];
// }

// async function getElements(response) {
//   let rate =response.conversion_rate;
//   let rateTotal = (fromInput * rate); 
//   return rateTotal;  
// }

// async function getExchangeRate(fromCurrencyCode, toCurrencyCode) {
//   const response = await CurrencyExchange.getConverted(fromCurrencyCode, toCurrencyCode);
//   getElements(response);
// }

// function getRate(info){
//   const entries =Object.entries(response); 
//     for (var i = 0; i<entries.length; i++){
//       const rate = fromSelect.entries[i].conversion_rate;
//     }
// }

// • Substitute `YOUR-API-KEY` with the API key displayed in your dashboard.
// 89a0fdddabe5432a7021771e
// • Substitute `EUR` with the code you want to use as a base currency.

// • Substitute `GBP` with the code you want to use as a target currency.
// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP

// "result": "success",
// "documentation": "https://www.exchangerate-api.com/docs",
// "terms_of_use": "https://www.exchangerate-api.com/terms",
// "time_last_update_unix": 1642291201,
// "time_last_update_utc": "Sun, 16 Jan 2022 00:00:01 +0000",
// "time_next_update_unix": 1642377601,
// "time_next_update_utc": "Mon, 17 Jan 2022 00:00:01 +0000",
// "base_code": "USD",
// "target_code": "INR",
// "conversion_rate": 74.1685