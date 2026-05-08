import express from 'express';
import { Sequelize } from 'sequelize';

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// Connect to the database using Sequelize
export const sequelize = new Sequelize(process.env.DATABASE_URI);

export default app;