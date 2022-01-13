export default class DnD5eService {  
  static getMonsters(challenge_rating) {
    return fetch(`https://api.open5e.com/monsters/?challenge_rating=${challenge_rating}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}