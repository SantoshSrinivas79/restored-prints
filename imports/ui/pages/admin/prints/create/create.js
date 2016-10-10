import './create.html';

import Publications from '../../../../../collections/publications/model';
import Artists from '../../../../../collections/artists/model';
import ImageUpload from '../../../../../common/image_upload';

var priceArray = new ReactiveArray([{}]);
var uploadStatus = new ReactiveVar(false);

var displayPreviewImage = function(fileField) {
  var input = fileField.find('input[type="file"]')[0];

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      fileField.find('img').attr('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
};

Template.admin_prints_create.onRendered(function() {
  var self = this;
  self.autorun(() => {
    self.subscribe('artists', function() {
      $('select').material_select();
    });
    self.subscribe('publications', function() {
      $('select').material_select();
    });
  });
});

// Template.admin_prints_create_form.onRendered(function() {
//   var self = this;
//   self.autorun(() => {
//     $('.file-field input[type="file"]').change(function() {
//       displayPreviewImage($('.file-field'));
//     });
//   });
// });
//
// Template.admin_prints_create_form.helpers({
//   publications() {
//     return Publications.find({});
//   },
//   artists() {
//     return Artists.find({});
//   }
// });
//
// Template.admin_prints_create.helpers({
//   upload_in_progress() {
//     return uploadStatus.get();
//   }
// });
//
//
// var getPriceValues = function() {
//   var prices = [];
//   $('.price-row').each(function() {
//     var priceObj = {
//       mmx: parseInt($(this).find('input.mmx').val()),
//       mmy: parseInt($(this).find('input.mmy').val()),
//       price: parseInt($(this).find('input.price').val())
//     };
//
//     prices.push(priceObj);
//   });
//   return prices;
// };
//
// var getFormDataObject = function() {
//   var printObj = $('#admin_prints_create').serializeArray();
//
//   var formData = {};
//   $.map(printObj, function(val) {
//     formData[val['name']] = val['value'];
//   });
//   return formData;
// };
//
// var uploadFiles = function(callback) {
//   var files = $('.file-field input[type="file"]')[0].files;
//   ImageUpload.uploadImage(files[0], function(err, url) {
//     callback(url);
//   });
// };
//
// Template.admin_prints_create.events({
//   'submit #admin_prints_create'(event) {
//     event.preventDefault();
//     uploadStatus.set(true);
//
//     var formData = getFormDataObject();
//
//     uploadFiles(function(url) {
//       formData.prices = getPriceValues();
//       formData.image_url = url;
//
//       Meteor.call('prints.insert', formData, function() {
//         FlowRouter.go("/admin/prints/");
//         uploadStatus.set(false);
//       });
//     });
//   }
// });
//
// Template.admin_prints_create_prices.events({
//   'click a.add_price'(event) {
//     event.preventDefault();
//
//     priceArray.push({});
//   },
//   'click .material-icons'() {
//     priceArray.remove(this);
//   }
// });
//
// Template.admin_prints_create_prices.helpers({
//   price_rows() {
//     return priceArray.list();
//   }
// });