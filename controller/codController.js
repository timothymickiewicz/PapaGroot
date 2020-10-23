const axios = require('axios');
const qs = require('qs');

module.exports = {
  mwlogin: function (req, res) {
    axios.request
    ({
        method: 'GET',
        url: 'https://profile.callofduty.com/login',
        headers: {
            'Cookie': ''
        }
    }).then(function (response) {
        console.log(JSON.stringify(response.data));
        res.send(JSON.stringify(response.data));
    }).catch((err) => {
        console.log("trying to login")
        console.log(err);
    });
  },
  domwlogin: function(req, res) {
    axios.request
    ({
        method: 'post',
        url: 'https://profile.callofduty.com/do_login?new_SiteId=cod',
        headers: { 
            'Cookie': 'XSRF-TOKEN=Set by test scripts; new_SiteId=cod;'
        },
        data : qs.stringify({
            'username': 'timothy.mickiewicz@gmail.com',
            'password': 'STS3andSTS4',
            'remember_me': 'true',
            '_csrf': 'Set by test scripts' 
        })
    }).then(function (response, status, xhr) {
        // console.log(response);
        // console.log(JSON.stringify(response.data));
        // res.send(response._csrf);
    }).catch((err) => {
        console.log("trying to login")
        console.log(err);
    });
  },
  getStats: function (req, res) {
    axios.request
    ({
        method: 'GET',
        url: 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/PapaGroot%231988/profile/type/mp'
    }).then(function (response) {
        // console.log(response.data);
    }).catch(function (error) {
        // console.log("trying to get stats");
        console.error(error);
    });
  },
};
