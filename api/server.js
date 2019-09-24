const express = require('express');
helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);



module.exports = server; 