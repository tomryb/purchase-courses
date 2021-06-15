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

const API = "748f33b9-dc7a-4b5e-bdce-5d6fc4c18993"

// server.listen(8000, () => console.log('Server for course is started...'));
server.listen(API, () => console.log('Server for course is started...'));

