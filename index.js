const { response } = require('express');
const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())
const port = process.env.PORT || 5000;

const course = require('./data/course.json');


app.get('/', (req, res) => {

    res.send('server running');


});

app.get('/course', (req, res) => {

    res.send(course);


});


app.get('/course/:id', (req, res) => {
    const id = (req.params.id)

    const selectedItems = course.find(n => n.id === id)

    res.send(selectedItems)

})

app.listen(port, () => {

    console.log('tourist  server running on port', port)


})