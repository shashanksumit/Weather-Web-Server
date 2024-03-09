const request = require('request')


const forecast = (lat, long, callback) => {
    console.log('Forcast API Calling', lat, long)
    const url = 'http://api.weatherstack.com/current?access_key=317470c1ddc916e82f9fdbf4b4459d41&query=' + lat + ',' + long

    request({ url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('unable to call forecast service!', undefined)
        } else if (body.error) {
            callback('Please check Lat & Long query', undefined)
        } else {
            console.log('Forcast API Called', body.current.temperature, body.current.feelslike)
            const currentTemp = body.current.temperature
            const feelsLikeTemp = body.current.feelslike
            callback(undefined, body.current.weather_descriptions[0] +'. it is currently '+ currentTemp + ' degrees out. It feels like ' + feelsLikeTemp + ' degrees out')
            //callback(currentTemp, feelsLikeTemp, body.current.weather_descriptions[0])
        }
    })

}

module.exports = forecast