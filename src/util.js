import axios from 'axios';

export default {
  mwlogin: function () {
    return axios.get('/codRoutes/mwlogin');
  },
  domwlogin: function(csrf) {
    const params = {
        token: csrf.token
    };
    return axios.post('/codRoutes/mwlogin', params, {
        "params": params,
        "headers": {
          "content-type": "application/json",
        },
    });
  },
  getStats: function () {
    return axios.get('/codRoutes/stats');
  }
};