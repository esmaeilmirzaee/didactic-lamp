import config from 'config';
import { Sequelize } from 'sequelize';

interface SequelizeConnection {
    Host: string;
    Port: number;
    Name: string;
    User: string;
    Pass: string;
}

const { Host, Port, Name, User, Pass } =
    config.get<SequelizeConnection>('development.db');

console.log({ Host, Port, Name, User, Pass });

export default new Sequelize(Name, User, Pass, {
    host: Host,
    port: Port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
