import { Express, Request, Response } from 'express';

export default function routes(app: Express) {
    app.get('/healthcheck', (_: Request, res: Response) =>
        res.status(200).send({ message: 'OK' }),
    );
}
