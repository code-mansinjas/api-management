'use strict';

const fs = require('fs');
const path = require('path');
import { Sequelize }  from 'sequelize';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config');

import mainConfig from '../config/config'

const config = mainConfig[env]

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export {
  sequelize,
  Sequelize
}
