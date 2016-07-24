Slingshot.fileRestrictions('uploadToCloudinary', {
  allowedFileTypes: ['image/png'],
  maxSize: 500000000,
});

Slingshot.createDirective('uploadToCloudinary', Slingshot.Cloudinary, {
  authorize() {
    return true;
  },
  key() {
    return Meteor.uuid();
  },
});