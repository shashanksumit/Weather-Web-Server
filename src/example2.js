const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1> Hello Express!</h1>') // sending response to browser
})

app.get('/help', (req, res) => {
    res.send( {
        name: 'Shashank',
        company: 'CaaStle',
        tech: 'iOS'
    })
})

app.get('/about', (req, res) => {
    res.send([ {
        name: 'shashank'
    }, {
        tech: 'ios'
    }])
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny Day',
        location: 'Noida'
    })
})

// Start the server
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})