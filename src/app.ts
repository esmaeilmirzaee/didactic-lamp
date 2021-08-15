import config from 'config';
import express from 'express';
import routes from './routes';

const HOST = config.get<string>('development.host');
const PORT = config.get<number>('development.port');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`App is listening on ${HOST}:${PORT}.`);
    routes(app);
});
