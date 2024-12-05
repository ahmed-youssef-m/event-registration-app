const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: parseInt(process.env.DB_PORT),
        dialectOptions: {
            options: {
                enableArithAbort: process.env.DB_ARITH_ABORT === 'true',
                trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true'
            }
        }
    }
);

module.exports = sequelize;