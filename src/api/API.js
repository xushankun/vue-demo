/**
 * Created by shankun on 2017/9/3.
 */
import axios from 'axios'
import config from './config'
import Qs from 'qs'

class API {
  getList (param) {
    config.params = param;
    return axios.get('/topics',config);
  }
  loginF (param) {
    config.data = param;
    return axios.post('/accesstoken',{},config);
  }
}
export default API;
