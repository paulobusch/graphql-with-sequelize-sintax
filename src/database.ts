import { Sequelize } from 'sequelize-typescript';
import { User } from './resolvers/users/users.schema';
 
const db = new Sequelize({
    database: 'graphql_tests',
    dialect: 'mysql',
    username: 'root',
    password: '123456',
    models: [User]
});

export default db;