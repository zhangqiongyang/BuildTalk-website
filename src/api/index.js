import axios from 'axios'

axios.defaults.withCredentials = true

/*  封装ajax方法 */
const requestResponse = (type, url, data) => {
  if (!type) type = 'GET';
  if (!data) data = null;
  type = type.toUpperCase();
  if (type == 'GET') return axios.get(url, {params: data});
  if (type == 'PUT') return axios.put(url, qsToformdata(data));
  if (type == 'POST') return axios.post(url, qsToformdata(data))
}
/* json数据转化成formdata数据格式 */
const qsToformdata = (json) => {
  if (!json) return null;
  var fd = new FormData();
  var jn = '';
  for (jn in json) {
    var jsonLi = json[jn];
    if (jsonLi.constructor === Array) {
      if (jsonLi.length === 0) {
        fd.append(jn, '')
      } else {
        if ((jsonLi[0]).constructor === File) {
          jsonLi.forEach((curr, index) => {
            fd.append(jn, curr)
          })
        } else {
          fd.append(jn, jsonLi)
        }
      }
    } else {
      fd.append(jn, jsonLi)
    }
  }
  fd;
  return fd
}
var smaBaseUrl = '/api'
if (process.env.NODE_ENV === 'production') {
  smaBaseUrl = process.env.API_ROOT
}


//首页

// 首页新闻信息接口
var getIndexNewsInfo = () => requestResponse('POST', smaBaseUrl + '/searchallrecommend');


export {

  getIndexNewsInfo,

}
