const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();


app.get('/api', (req, res) => {
    res.json({
        message: 'JSON WEB TOKENS',
    }); 
})

app.post('api/posts', (req, res) => {
    res.json({
        message: 'Post created!',
    })
})

app.post('/api/login', (req, res) => {
        const user =  {
            id: 1,
            username: 'John',
            email: 'john@gmail.com',
        }
        jwt.sign({user: user}, 'secretkey', (err, token) => {
            res.json({
                token: token
            })
        })
})
//token and user directly
//!!
// can be written shortly, directly


const port = 3000;

app.listen(port, () => console.log('Server started on port 3000'))