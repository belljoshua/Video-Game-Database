var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs440_belljos',
  password        : '1234',
  database        : 'cs440_belljos'
});

module.exports.pool = pool;
