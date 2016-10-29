/**
 * @param resultCode
 * @returns {*}
 */

export default function (resultCode) {
  switch (resultCode) {
    case 1:
      return "时间过期";
    case 2:
      return "找不到此用户";
    case 3:
      return "用户名重复";
    default:
      console.log("出现新类型：" + resultCode);
      return "未知错误";
  }
}
