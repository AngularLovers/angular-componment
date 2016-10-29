/**
 * 获取参数
 * http://localhost:8080/test.html?email=83387856@qq.com&password=123456&validateCode=a6484f9633ec0bf1d9d931a1067a180a&time=1477709309321
 * 问号后面的值
 * @param name
 * @returns {*}
 */
export default function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return "";
}
