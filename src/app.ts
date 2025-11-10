import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';

const app = express();

app.use(express.json());

const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello From Express!!');
});

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'typeorm_db',
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default app;
