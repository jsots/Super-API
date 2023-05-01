import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Characters', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
 console.log('Database connected!');
});


app.use('/', routes);

app.listen(port, () => {
 console.log(`Server listening on port ${port}`);
});

