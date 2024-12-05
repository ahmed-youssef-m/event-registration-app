require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database')
const eventRoutes = require('./routes/eventRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const Event = require('./models/Event');
const Registration = require('./models/Registration');

const app = express();
app.use(bodyParser.json());

sequelize.authenticate().then(() => {
    console.log('Connection to MSSQL Server has been established successfully')
}).catch((err) => {
    console.log('Unable to connect to MSSQL Server', err)
});

sequelize.sync({ force: true }).then(() => {
    console.log('Databases & tables are created');
}).catch((err) => {
    console.log('Databases synchronization error \n', err);
})

app.use('/api', eventRoutes);
app.use('/api', registrationRoutes);

app.get('/', (req, res) => {
    res.send('Hi');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})