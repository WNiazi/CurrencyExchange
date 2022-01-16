import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/CurrencyExchange';





// function getElements(response) {
//   if (response.main) {
//     $('#.toCurrency-amount').text(` ${conversion}`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

// $(document).ready(function() {
//   $('#submit').click(function() {
//         const fromSelect = $('.fromCurrencyCode select');
//         const fromInput = $('#fromCurrency-amount');
//         const toSelect = $('.toCurrencyCode select');
//    CurrencyExchange.getConverted(toCurrencyCode, fromCurrencyCode); 
//       .then(function(response) {
//         getElements(response);
//         getConversion(); 
//       });
//   });
// });
// ----------------


// async function displayfinal () { 
//   const exchangeRate = await  getExchangeRate(fromCurrencyCode, toCurrencyCode);
//   if (response.getExchangeRate()) { 
//     $('.exchange-rate').text(`The rate is ${response.conversion_rate} in ${response.getExchangeRate()}`)
//   } else { 
//     $('.showErrors').text(`There was an error: ${response}`);
//   }
// }



$(document).ready(function() {
  $('#submit').click(function() {
    const fromSelect = $('.fromCurrencyCode select');
    console.log (fromSelect); 
    const fromInput = parseInt($('#fromCurrency-amount'));
    console.log(fromInput);
    const toSelect = $('.toCurrencyCode select');
    console.log(toSelect);
// function getRate(info){
//   const entries =Object.entries(info); 
//     for (var i = 0; i<entries.length; i++){
//       const rate = fromSelect.entries[i][1];
//     }
// }
  });
});