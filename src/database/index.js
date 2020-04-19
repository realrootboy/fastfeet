import Sequelize from 'sequelize';

import databaseConfig from './../config/database';

//models import
import User from './../app/models/User'
import Recipient from './../app/models/Recipient'

const models = [User, Recipient];
//end models import

class Database {
  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
