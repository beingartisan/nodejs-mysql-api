var mysql = require('mysql');

var projectsFactory = function () {
    var getConnection = function () {
        return mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME
        });
    };

    var testConnection = function () {
        var connection = getConnection();
        connection.connect(function(err){
            if(err){
                throw err;
            }
        });

        connection.query('select VERSION(), USER(), CURRENT_DATE;', function (error, results, fields) {
            if (error) {
                throw error;
            };            
            console.log('Connection successful');
        });        
        connection.end();
    };

    var getProjects = function (cb) {
        var connection = getConnection();
        connection.connect(function(err){
            if(err){
                throw err;
            }
        });

        connection.query('select * from projescts;', function (error, results, fields) {
            if (error) {
                cb(error, null);
            };             
            cb(null, results);
        });        
        connection.end();
    };

    return {
        testConnection: testConnection,
        getProjects : getProjects
    };
};

module.exports = projectsFactory;