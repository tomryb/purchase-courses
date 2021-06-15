const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const coursesRoutes = require('./routes/courses');
const usersRoutes = require('./routes/users');

const server = express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(cors());

server.use('/courses', coursesRoutes);
server.use('/users', usersRoutes);


// server.listen(8000, () => console.log('Server for course is started...'));
server.listen(PORT, () => console.log('Server for course is started...'));

