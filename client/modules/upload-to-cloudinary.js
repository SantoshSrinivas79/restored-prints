var uploadImage = function(file, callback) {
  var uploader = new Slingshot.Upload("uploadToCloudinary");

  uploader.send(file, callback);
};

Modules.client.uploadToCloudinary = uploadImage;