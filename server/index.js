import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import usersRoute from './routes/users.js';
import postsRoute from './routes/posts.js';

const app = express();

// Server side must use a different port from client
const PORT = process.env.PORT || 3001; 

app.use(cors())
app.use(express.json())

// limits the amount of data being sent 
app.use(bodyParser.json({limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}));

// pre-fixes /users to 'localhost:3001' to become 'localhost:3001/users'
app.use('/users', usersRoute)
app.use('/posts', postsRoute)

// connect to one of the databases in mongodb
mongoose.connect("mongodb+srv://reignnz:218002cC@cluster0.gaeb7.mongodb.net/socialmedia?retryWrites=true&w=majority")
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(error => console.log(`${error} did not connect`));

