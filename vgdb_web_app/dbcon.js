var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs440_rohrj',
  password        : '8217',
  database        : 'cs440_rohrj'
});

module.exports.pool = pool;
