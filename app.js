import express from "express";
import bookRoutes from '../routes/bookRoute.js';
import studentRoutes from './routes/studentRoute.js';

const app = express();

app.use(express.json());

app.use("/book", bookRoutes);
app.use("/student", studentRoutes);

try {
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log('Listening on port ${port}...');
    });
} catch (e) {
    console.error(e);
}