import axios from 'axios';

export default {
  mwlogin: function () {
    return axios.get('/codRoutes/mwlogin');
  },
  domwlogin: function() {
    return axios.post('/codRoutes/mwlogin');
  },
  getStats: function () {
    return axios.get('/codRoutes/stats');
  }
};