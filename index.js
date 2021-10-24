const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const cookie_parser = require('cookie-parser');
const sequelize = require('./database');
const PORT = process.env.PORT || 8080;

const app = express();
const routes = require('./routes/index');

sequelize.sync().then(() => console.log('DB is ready'));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'PATCH'],
    exposedHeaders: ['refreshToken']
  })
);
app.use(cookie_parser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => res.send('Hello World?'));

app.use('/', routes);

app.listen(PORT, () => console.log(`Server is Running ${PORT}`));
