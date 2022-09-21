import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format."
import models from './models';
const port = process.env.PORT || 3000;
app.set('port', port);
console.log("server started on ",port)
models.sequelize.sync().then(function () {
    app.listen(port);
});

import applyRouter from './routes'
applyRouter(app);

app.get('*', (req: string, res: any) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;