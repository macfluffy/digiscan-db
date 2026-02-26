import express from 'express';
import { Sequelize } from 'sequelize';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});


// Create an instance of sequelize and pass a connection to the PostgreSQL URI 
export const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

export default app;