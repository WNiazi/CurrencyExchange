import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DnD5eService from "./js/DnD5eService";



function getMonsters(response) {
  if (response.results) {
    $('.showcharacters').text(`The name of the monster is ${response.results[0]["name"]} and its armor class is ${response.results[0]["armor_class"]} `);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
$(document).ready(function() {
  $('#character_btn').click(function() {
    let ratings = $('#challenge_rating').val();
    DnD5eService.getMonsters(ratings)
      .then(function(response) {
        getMonsters(response);
      });
  });
});