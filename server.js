var mysqlConfig = require('./config.js').mysql;
var pg = require('pg')
var exec = require('./lib/exec');


function initApp() {
  const client = new pg.Client();
  client.connect()
  exec(client)
}

initApp();

//d run node node server.js command -d elastic -g 'Zabbix servers' -l 5m -t 'history' -u 'http://elasticsearch:9200/teste'