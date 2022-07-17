const express = require('express')
const path = require('path')
const app = express()


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
