const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
const mongoose = require('mongoose');

// require('dotenv').config();
// Database = 'mongodb+srv://amonis:$Code&&Sleep7@portfolio.j61o7hs.mongodb.net/portfolio'

let key = process.env.KEY;

mongoose.connect(`mongodb+srv://amonis:${key}@portfolio.j61o7hs.mongodb.net/portfolio`, { useNewUrlParser: true })

const blogSchema = new mongoose.Schema({
  name: String,
  date: Number,
  post: String
})
// 'mongodb+srv://amonis:$Code&&Sleep7@portfolio.j61o7hs.mongodb.net/portfolio'

app.use(bodyParser.json());

const Blog = mongoose.model("Blog", blogSchema)

// const blog = new Blog({
//   name: "Andrew",
//   date: "10",
//   post: 'Lorem Ipsum'
// })
// blog.save()


let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000
}
app.listen(port, function () {
    console.log('Server is running')
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.use(express.static(path.join(__dirname, '/public')));


// const url = 'mongobd://localhost:27017';

// const dbname = 'portfolio';

// const client = new MongoClient(url, { useNewUrlParser: true });

// client.connect (() => {
//   assert.equal(null, err);
//   console.log("Connected to server");

//   const  db = client.db(dbname)

//   client.close();
// })
