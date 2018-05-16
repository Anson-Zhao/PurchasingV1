// config/database.js
module.exports = {
    'commondb_connection': {
        'multipleStatements': true,
        'connectionLimit' : 100,
        'host': '10.11.4.249',
        'user': 'purchasing',
        'password': 'Purc@0001',
        'port'    :  3306,
        'database': 'Purchasing'
    },
    'session_connection': {
        'multipleStatements': true,
        'connectionLimit' : 100,
        'host': '10.11.4.249',
        'user': 'purchasing',
        'password': 'Purc@0001',
        'port'    :  3306
    },

    'Session_db': 'Purchasing',
    'Login_db': 'Purchasing',
    'Login_table': 'Users',
    'Upload_db': 'Purchasing',

    'Server_Port': 7999,

    'Upload_Path': '/Users/ftaaworldbridgelab/Desktop/Test'

};
