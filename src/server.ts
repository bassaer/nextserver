import express, { Router } from 'express';
import mogan from 'morgan';
import nextjs from 'next';

const dev = process.env.NODE_ENV !== 'production'
const nextApp = nextjs({ dev });
const port = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  const app = express();

  app.use(mogan('short'));

  app.use('/about', (req, res, next) => {
    return nextApp.render(req, res, '/about');
  });

  app.use('/main', (req, res, next) => {
    return nextApp.render(req, res, '/main');
  });

  app.use('/', (req, res) => {
    return nextApp.render(req, res, '/');
  });

  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`start server : http://localhost:${port}/main`);
  });
});

