import express from 'express';
import morgan from 'morgan';

const app = express();

// Middlewares
app.use(morgan('dev'));

const nameTest = 'makdoom';

app.get('/health-check', (req, res) => {
  return res.json({ success: true, message: 'OK' });
});

app.listen(8000, () => {
  console.log('Server up and running at 8000');
});
