const express = require('express');
helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const employeesRouter = require('../routers/employees/employees-router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/employees', employeesRouter)


//test route
server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server; 