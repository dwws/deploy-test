import express from 'express';

const app = express();

app.get('/', (req, res) => res.status(200).send('Ok'));

app.listen(process.env.PORT || 3000, () => console.log('Server started'));