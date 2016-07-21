import '../../../ui/layouts/admin/layout';
import '../../../ui/pages/admin/login/login';
import '../../../ui/pages/admin/prints/list/list';
import '../../../ui/pages/admin/prints/edit/edit';
import '../../../ui/pages/admin/prints/create/create';

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
});

adminRoutes.route('/', {
  name: 'login',
  action: function() {
    BlazeLayout.render("admin_login");
  }
});

var printRoutes = adminRoutes.group({
  prefix: '/prints',
  name: 'prints'
});

printRoutes.route('/', {
  name: 'list',
  subscriptions: function() {
    this.register('admin_prints', Meteor.subscribe('prints'));
    this.register('admin_publications', Meteor.subscribe('publications'));
  },
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_prints_list" });
  }
});

printRoutes.route('/create', {
  name: 'create',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_prints_create" });
  }
});