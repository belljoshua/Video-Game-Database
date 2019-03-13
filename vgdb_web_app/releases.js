module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getReleases(res, mysql, context, complete){
        mysql.pool.query("SELECT Releases.Title, Releases.Release_Date, Releases.Region, Releases.Platform, Releases.Age_Rating FROM Releases ORDER BY Title ASC", function(error, results, fields){
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
       var query = "SELECT Releases.Title, Releases.Release_Date, Releases.Region, Releases.Platform, Releases.Age_Rating FROM Releases WHERE Title LIKE "
       + mysql.pool.escape(req.params.s + '%') + " OR Release_Date LIKE "
       + mysql.pool.escape(req.params.s + '%') + " OR Region LIKE "
       + mysql.pool.escape(req.params.s + '%') + " OR Platform LIKE "
       + mysql.pool.escape(req.params.s + '%') + " OR Age_Rating LIKE "
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
       var query = "SELECT Releases.Title, Releases.Release_Date, Releases.Region, Releases.Platform, Releases.Age_Rating FROM Releases WHERE Title LIKE "
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
    function getReleaseDateLike(req, res, mysql, context, complete) {
      //sanitize the input as well as include the % character
       var query = "SELECT Releases.Title, Releases.Release_Date, Releases.Region, Releases.Platform, Releases.Age_Rating FROM Releases WHERE Release_Date LIKE "
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
    function getRegionLike(req, res, mysql, context, complete) {
      //sanitize the input as well as include the % character
       var query = "SELECT Releases.Title, Releases.Release_Date, Releases.Region, Releases.Platform, Releases.Age_Rating FROM Releases WHERE Region LIKE "
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
    function getPlatformLike(req, res, mysql, context, complete) {
      //sanitize the input as well as include the % character
       var query = "SELECT Releases.Title, Releases.Release_Date, Releases.Region, Releases.Platform, Releases.Age_Rating FROM Releases WHERE Platform LIKE "
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
    function getAgeRatingLike(req, res, mysql, context, complete) {
      //sanitize the input as well as include the % character
       var query = "SELECT Releases.Title, Releases.Release_Date, Releases.Region, Releases.Platform, Releases.Age_Rating FROM Releases WHERE Age_Rating LIKE "
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
        getReleases(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('releases', context);
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
          case "release_date": getReleaseDateLike(req, res, mysql, context, complete);
                      break;
          case "region": getRegionLike(req, res, mysql, context, complete);
                      break;
          case "platform": getPlatformLike(req, res, mysql, context, complete);
                      break;
          case "age_rating": getAgeRatingLike(req, res, mysql, context, complete);
                      break;
        }
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('releases', context);
            }
        }
    });

    return router;
}();
