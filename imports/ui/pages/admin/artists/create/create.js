import './create.html';

Template.admin_artists_create.onRendered(function() {
  var self = this;
  self.autorun(() => {
    $('select').material_select();
  });
});