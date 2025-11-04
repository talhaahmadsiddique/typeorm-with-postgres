import express from 'express';

const app = express();

app.use(express.json());

const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello From Express!!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
