function searchGames() {
    //get the game
    var game_search  = document.getElementById('game_search').value
    //construct the URL and redirect to it
    window.location = '/games/search/' + encodeURI(game_search)
}

function searchReleases() {
    //get the search
    var release_search  = document.getElementById('release_search').value
    var filterlist = document.getElementById('releaselist')
    var release_filter = filterlist.options[filterlist.selectedIndex].value
    //construct the URL and redirect to it
    window.location = '/releases/search/' + encodeURI(release_search) + '&' + encodeURI(release_filter)
}

function searchRatings() {
    //get the search
    var rating_search  = document.getElementById('rating_search').value
    var filterlist = document.getElementById('ratinglist')
    var rating_filter = filterlist.options[filterlist.selectedIndex].value
    //construct the URL and redirect to it
    window.location = '/ratings/search/' + encodeURI(rating_search) + '&' + encodeURI(rating_filter)
}

function searchGenres() {
    //get the search
    var genre_search  = document.getElementById('genre_search').value
    var filterlist = document.getElementById('genrelist')
    var genre_filter = filterlist.options[filterlist.selectedIndex].value
    //construct the URL and redirect to it
    window.location = '/genres/search/' + encodeURI(genre_search) + '&' + encodeURI(genre_filter)
}

function searchPublishers() {
    //get the search
    var publisher_search  = document.getElementById('publisher_search').value
    var filterlist = document.getElementById('publisherlist')
    var publisher_filter = filterlist.options[filterlist.selectedIndex].value
    //construct the URL and redirect to it
    window.location = '/publishers/search/' + encodeURI(publisher_search) + '&' + encodeURI(publisher_filter)
}

function searchDevelopers() {
    //get the search
    var developer_search  = document.getElementById('developer_search').value
    var filterlist = document.getElementById('developerlist')
    var developer_filter = filterlist.options[filterlist.selectedIndex].value
    //construct the URL and redirect to it
    window.location = '/developers/search/' + encodeURI(developer_search) + '&' + encodeURI(developer_filter)
}
