const dotenv = require ('dotenv');
const axios = require('axios');
const API = require('call-of-duty-api')({ platform: "battle" });

dotenv.config();

module.exports = {
  mwlogin: function (req, res) {
    axios.request
    ({
        method: 'GET',
        // url: 'https://profile.callofduty.com/login',
        url: 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/PapaGroot%23211988/profile/type/mp',
        headers: {
            'Cookie': ''
        }
    }, { withCredentials: true })
    .then(function (response) {
        let cookieString= response.headers['set-cookie'];
        cookieString = cookieString[0].split(' ');
        cookieString = cookieString[0].slice(15, -1);
        console.log(cookieString);
        console.log(response.headers['set-cookie'])
        res.send(cookieString);
    })
    .catch((err) => {
        console.log(err);
    });
  },

  domwlogin: function(req, res) {
      console.log(process.env.EMAIL);
    API.login(process.env.EMAIL, process.env.PW).then((response) => {
        let data = {};

        API.MWstats(process.env.GT, API.platforms.battle).then((output) => {
            data = output;
            console.log(data);
            res.send(data);
        }).catch((err2) => {
            console.log(err2)
        });
        
    }).catch((err) => {
        console.log(err);
    })
  },

  getStats: function (req, res) {
    axios.request
    ({
        method: 'GET',
        url: 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/PapaGroot%231988/profile/type/mp',
        headers: { 
            'Cookie': 'utkn=' + atkn + '; rtkn=' + sso + ';'
        },
    }, { withCredentials: true })
    .then(function (response) {
        // console.log(response.data);
    })
    .catch(function (error) {
        console.log("error trying to get stats");
        // console.error(error);
    });
  },
};
