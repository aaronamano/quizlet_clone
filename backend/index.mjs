import express from 'express';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Press Ctrl+C to stop the server.`);
})