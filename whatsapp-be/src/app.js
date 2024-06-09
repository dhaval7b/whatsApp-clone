import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import helmet from 'helmet';
dotenv.config();
const app = express();
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// Helmet
app.use(helmet());
app.get('/', (req, res) => {
    res.send('Hello from WhatsApp Backend!');
});
export default app;