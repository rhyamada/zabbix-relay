var _ = require('lodash');

var defaultConfig = {
  mysql: {
    host: 'localhost',
    user: 'test',
    password: '',
    database: 'zabbix',
    port: 3306
  },
  zabbix: {
    url: 'http://zabbix-web/api_jsonrpc.php',
    username: 'Admin',
    password: 'zabbix'
  }
};

var config = function() {
  return _.merge(defaultConfig, require('./config.json'));
};

module.exports = config();
