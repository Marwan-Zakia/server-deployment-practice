'use strict';
const { response } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT =3000;
const notFoundHandler = require('./handlers/404')
const errorHandler = require('./handlers/500')
const stamper = require('./mid/stamper')

app.get('/', (req, res) => {
    res.status(200).send('everything is awesome ')

})

app.get('/data', stamper, (req, res) => {
    const obj = {
        10: 'is even',
        5: 'is odd ',
        "time": req.timestamp
    }
    res.status(200).json(obj);
})



app.get('/bad',(req, res,next) => {
throw new Error('you missed up!!')
})

app.use('*',errorHandler);
app.use(notFoundHandler)


function main() {
app.listen(PORT,(request,response)=>{
console.log(`working on ${PORT}`);


})


}
module.exports ={
app,main
}



