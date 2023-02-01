const express = require('express'); 
const mysql2 = require ('./mysql2.config')
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extend: false}));
app.use(express.json());

const db = mysql.createConnection(mysql2);

db.query('DEL')
