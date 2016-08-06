
class imageUpload {
  uploadImage(file, callback) {
    var uploader = new Slingshot.Upload("uploadToCloudinary");

    uploader.send(file, callback);
  }
}

export const ImageUpload = new imageUpload();
