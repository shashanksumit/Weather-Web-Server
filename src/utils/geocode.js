const request = require('request')

const geocode = (address, callback) => {
    console.log(address)
    const url = 'http://api.positionstack.com/v1/forward?access_key=0b2b1249e70064a91ebb224c4f44b811&query=' + encodeURIComponent(address)
    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect Weather service', undefined)
        } else if (body.error) {
            callback('Please try with correct query on Weather service', undefined)
        } else if (body.data.length == 0) {
            callback('Invalid City, Please try with correct query on Weather service', undefined)
        } else {
            console.log(body)
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            })
        }
    })
}

module.exports = geocode
