const fs = require('fs');
const path = require('path');

module.exports = {
    development: {
        username: 'admin',
        password: 'root',
        database: 'admin',
        host: 'localhost',
        dialect: 'postgres',
    }, 
    production: {
        username: 'doadmin',
        password: 'AVNS_WF4Tx1NGTRBPL2uzW2k',
        database: 'defaultdb',
        host: 'db-postgresql-sgp1-27061-do-user-14678962-0.b.db.ondigitalocean.com',
        dialect: 'postgres',
        port: 25060,
        dialectOptions: {
            ssl: {
                ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt"))
            }
        },
    },
};