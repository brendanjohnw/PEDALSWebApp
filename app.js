// Listen for requests
import express from 'express';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import path from 'path';
import Handlebars from 'handlebars';
import { mainRouter } from './routes/mainRouter.js';
import { pdlRouter } from './routes/pdlRouter.js';

const app = express();
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');
// Serve static content
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/PDLConnect', pdlRouter);
app.use('/', mainRouter);


app.listen(process.env.PORT || 3200 || '0.0.0.0', () => {
    console.log('running!');
});