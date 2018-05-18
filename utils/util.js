function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}
// 上传
function uploadFile(url, filePath, name, formData, callback){

  wx.uploadFile({
    url: url,
    filePath: filePath,
    name: name,
    header: {},
    formData: formData,
    success: function(res) {
      callback(res)
    },
  })
}
// 下载
function downloadFile(url, callback){
  wx.downloadFile({
    url: url,
    header: {},
    success: function(res) {
      callback(res)
    },
  })
}



module.exports = {
  json2Form: json2Form,
  uploadFile: uploadFile,
  downloadFile: downloadFile
}

