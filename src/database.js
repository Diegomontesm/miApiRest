//ARCHIVO DE CONEXIÓN
const mysql = require ('mysql');

const mysqlConnection = mysql.createConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abc1234',
    database: 'company'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB IS CONNECTED');
    }
});

module.exports = mysqlConnection;