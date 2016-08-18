import './create.html';

Template.admin_categories_create.onRendered(function() {
  this.autorun(() => {
    $('select').material_select();
  });
});

