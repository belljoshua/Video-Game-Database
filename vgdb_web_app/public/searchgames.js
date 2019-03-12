function searchGames() {
    //get the first name 
    var game_search  = document.getElementById('game_search').value
    //construct the URL and redirect to it
    window.location = '/games/search/' + encodeURI(game_search)
}
