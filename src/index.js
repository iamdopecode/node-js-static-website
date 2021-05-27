const express = require('express')
const path = require('path')
const app = express();
const PORT = 8000;

// Assiging of path of public directory 

const staticPath = path.join(__dirname, '../public');

// Built-in Middleware

app.use(express.static(staticPath))


app.get('/', (req,res) => {
    res.send("Welcome To Node JS Server")
})

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
})