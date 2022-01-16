import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/CurrencyExchange';

function clearFields() {
  $('.fromCurrencyCode select').val("");
  $('#fromCurrency-amount').val("");
  $('.toCurrencyCode select').val("");
  $('.showErrors').text("");
  $('.showRate').text("");
  $('.showOuput').text("");
}

$(document).ready(function() {
  $('#submit').click(function() {
    const fromCurrencyCode = $('.fromCurrencyCode select');
    const amount = $('#fromCurrency-amount');
    const toCurrencyCode = $('.toCurrencyCode select');
    clearFields();
    CurrencyExchange.getConversion(fromCurrencyCode, toCurrencyCode, amount)
      .then(function(response) {
        if (response.conversion_rate){ 
          const rate = response.conversion_rate; 
          const total = amount * rate ; 
          $('.showRate').text(`The conversion rate between ${toCurrencyCode} and ${fromCurrencyCode} is ${rate}`);
          $('.showOutput').text(`The new amount is ${total}`);
        } else {
          $('#showErrors').text(`There was an error: ${response.message}`)
        }
      });
    });
});