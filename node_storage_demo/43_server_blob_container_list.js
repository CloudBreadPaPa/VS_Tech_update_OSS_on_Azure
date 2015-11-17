// 패키지 import 수행
var azure = require('azure-storage');

var blobService = azure.createBlobService('vstechupdate', '<어카운트키>');

// blob 리스트 수행
blobService.listBlobsSegmented('nodecontainer', null, function(error, result, response){
  if (!error) {
	console.log(response);
	console.log(result);
  } else {
	console.log(error);
  }
});