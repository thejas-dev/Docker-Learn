const express = require('express');
const app = express();
const {validToken} = require('./utils/helpers');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors(
    {
      origin: ['http://localhost:3000','http://localhost:3001'],
      credentials: true,
    }
));

// Middleware to log request method, URL, and timestamp

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`${req.method} ${req.url} - ${timestamp}`);

  // If the url contains generate token use the next() method otherwise use authenticateUser(req,res,next);
  if(req.url === '/generateToken'){
    next();
  }else{
    authenticateUser(req,res,next);
  }
  
}, userRoutes);

// Middleware to check if user is authenticated
function authenticateUser(req, res, next) {
  const token = req.headers['authorization'];
  if (!token || !validToken(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://mongo:27017/my_database'
)
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log(err,'DB not connected');
  });


// Initialize application with port 3333
app.listen(3333, () => {
  console.log('Server running on port 3333');
});

