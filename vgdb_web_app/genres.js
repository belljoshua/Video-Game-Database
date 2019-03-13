module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getGenres(res, mysql, context, complete){
        mysql.pool.query("SELECT Genres.Title, Genres.Genre FROM Genres ORDER BY Title ASC", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.game = results;
            complete();
        });
    }

    /* Find game whose name starts with a given string in the req */
    function getAllLike(req, res, mysql, context, complete) {
      //sanitize the input as well as include the % character
       var query = "SELECT Genres.Title, Genres.Genre FROM Genres WHERE Title LIKE "
       + mysql.pool.escape(req.params.s + '%') + " OR Genre LIKE "
       + mysql.pool.escape(req.params.s + '%');

      mysql.pool.query(query, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.game = results;
            complete();
        });
    }

    /* Find game whose name starts with a given string in the req */
    function getTitleLike(req, res, mysql, context, complete) {
      //sanitize the input as well as include the % character
       var query = "SELECT Genres.Title, Genres.Genre FROM Genres WHERE Title LIKE "
       + mysql.pool.escape(req.params.s + '%');

      mysql.pool.query(query, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.game = results;
            complete();
        });
    }

    /* Find game whose name starts with a given string in the req */
    function getGenreLike(req, res, mysql, context, complete) {
      //sanitize the input as well as include the % character
       var query = "SELECT Genres.Title, Genres.Genre FROM Genres WHERE Genre LIKE "
       + mysql.pool.escape(req.params.s + '%');

      mysql.pool.query(query, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.game = results;
            complete();
        });
    }

    /*Display all student. Requires web based javascript to delete users with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["searchgames.js"];
        var mysql = req.app.get('mysql');
        getGenres(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('genres', context);
            }

        }
    });

    /*Display all games whose name starts with a given string. Requires web based javascript to delete users with AJAX */
    router.get('/search/:s&:f', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["searchgames.js"];
        var mysql = req.app.get('mysql');

        switch (req.params.f) {
          case "all": getAllLike(req, res, mysql, context, complete);
                      break;
          case "title": getTitleLike(req, res, mysql, context, complete);
                      break;
          case "genre": getGenreLike(req, res, mysql, context, complete);
                      break;
        }
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('genres', context);
            }
        }
    });

    return router;
}();
