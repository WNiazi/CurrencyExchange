import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DnD5eService from "./js/DnD5eService";



function getMonsters(response) {
  if (response.main) {
    $('.showcharacters').text(`The strengths are ${response.challenge_rating}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
$(document).ready(function() {
  $('#formOne').click(function() {
    let ratings = $('#challenge_rating').val();
    DnD5eService.getMonsters(ratings)
      .then(function(response) {
        getMonsters(response);
      });
  });
});