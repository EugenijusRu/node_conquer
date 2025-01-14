import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

export default app;