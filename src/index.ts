import express from 'express';
import { movieApiFaker } from './apis/movie.api'
import { logger } from './utils/logger'
const app = express();
const port = 8080 // default port to listen

setInterval(() => {
    movieApiFaker().then(data => {
        logger.info('Coming data ==>', data)
    })
}, 10000)

// start the Express server
app.listen( port, () => {
    logger.info('=================================');
    logger.info(`🚀 App listening on the port ${port}`);
    logger.info('=================================');
} )