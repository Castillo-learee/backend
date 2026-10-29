import express from 'express';
import bookRoutes from './routes/bookRoutes.js';


//create express app
const app = express();

app.use(express.json());
app.use('/book', bookRoutes);
pus
try {
    const port = 3000; 
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}