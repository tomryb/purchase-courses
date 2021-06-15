const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const coursesRoutes = require('./routes/courses');
const usersRoutes = require('./routes/users');

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use('/courses', coursesRoutes);
server.use('/users', usersRoutes);

const URL = "https://awesome-turing-7e67d2.netlify.app/"

// server.listen(8000, () => console.log('Server for course is started...'));
server.listen(URL, () => console.log('Server for course is started...'));

