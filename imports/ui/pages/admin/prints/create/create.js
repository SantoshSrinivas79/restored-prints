import './create.html';

Template.admin_prints_create.onRendered(function() {
  const self = this;
  self.autorun(() => {
    self.subscribe('artists', function() {
      setTimeout(function() {
        $("select.browser-default").removeClass('browser-default');
        $("select").material_select();
      }, 100);
    });
    self.subscribe('publications', function() {
      setTimeout(function() {
        $("select.browser-default").removeClass('browser-default');
        $("select").material_select();
      }, 100);
    });
    self.subscribe('categories', function() {
      setTimeout(function() {
        $("select.browser-default").removeClass('browser-default');
        $("select").material_select();
      }, 100);
    });
  });
});