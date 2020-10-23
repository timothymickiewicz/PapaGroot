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
        res.send(JSON.stringify(response.data));
    }).catch((err) => {
        console.log(err);
    });
  },
  domwlogin: function(req, res) {
    const data = qs.stringify({
        'username': 'timothy.mickiewicz@gmail.com',
        'password': 'R@sca100',
        'remember_me': 'true',
        '_csrf': req.query.token
    });
    axios.request
    ({
        method: 'POST',
        url: 'https://profile.callofduty.com/do_login?new_SiteId=cod',
        headers: { 
            'Cookie': `XSRF-TOKEN=` + req.query.token + `; new_SiteId=cod;`
        },
        data : data
    }).then(function (response, status, xhr) {
        console.log(JSON.stringify(response.data));
        res.send(JSON.stringify(response));
    }).catch((err) => {
        res.send('err');
        console.log(JSON.stringify(err));
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
