import './create.html';

Template.admin_artists_create.onRendered(function() {
  const self = this;
  self.autorun(() => {
    $('select').material_select();
  });
});