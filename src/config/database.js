const { Connection } = require('sqlifier')

const conn = new Connection();

conn.createConnection('localhost', 'root', '', require('mysql'))
conn.createDatabase('taxifinder')