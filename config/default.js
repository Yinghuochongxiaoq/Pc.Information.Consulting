require('../commonUtils/StringFromat');
module.exports = {
    port: 3000,
    session: {
        secret: 'freshmanblog',
        key: 'freshmanblog',
        maxAge: 2592000000
    },
    apiUrl: 'http://localhost:9000/api'
};