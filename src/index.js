import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/CurrencyExchange';

function clearFields() {
  $("#fromCurrencyCode").val("");
  $("#fromCurrency-amount").val("");
  $("#toCurrencyCode").val("");
  $('.showErrors').text("");
  $('.showRate').text("");
  $('.showOuput').text("");
}


function getElements(response) {
  if (typeof response === typeof Error) { 
    $('.showErrors').text(`There was an error: ${response}`)
  } else if (response.toCurrencyCode=== undefined) { 
    $('.showErrors').text(`There was an error: ${response}`)
  } else (response.conversion_rate)
        const rate = response.conversion_rate; 
        const total = amount * rate; 
        $('.showRate').text(`The conversion rate between ${toCurrencyCode} and ${fromCurrencyCode} is ${rate}`);
        $('.showOutput').text(`The new amount is ${total}`);    
}

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault(); 
    const fromCurrencyCode = $("#fromCurrencyCode").val();
    const amount = parseInt($("#fromCurrency-amount").val());
    const toCurrencyCode = $("#toCurrencyCode").val();
    clearFields();
    CurrencyExchange.getConversion(fromCurrencyCode, toCurrencyCode, amount)
      .then(function(response) {
        getElements(response); 
      });
    });
});