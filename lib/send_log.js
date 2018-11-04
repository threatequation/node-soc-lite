var pluginIni = require('../lib/threat');
const axios = require('axios');

module.exports = {
    postAttackData: function (data) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.request({
            url: pluginIni.postAttackData,
            method: "post",
            data: data,
        }).then((res) => {
            console.log(`statusCode: ${res.status}`)
        }).catch((error) => {
            console.error(error.response.status);
        })
    }
}