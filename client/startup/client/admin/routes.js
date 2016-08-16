import '../../../../imports/ui/layouts/admin/layout';
import '../../../../imports/ui/pages/admin/login/login';
import '../../../../imports/ui/pages/admin/prints/list/list';
import '../../../../imports/ui/pages/admin/prints/edit/edit';
import '../../../../imports/ui/pages/admin/prints/create/create';

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
});

adminRoutes.route('/', {
  name: 'login',
  action: function() {
    BlazeLayout.render("admin_login");
  },
  triggersEnter: [function(context, redirect) {
    if(Meteor.userId()) {
      redirect('/admin/prints');
    }
  }]
});

var printRoutes = adminRoutes.group({
  prefix: '/prints',
  name: 'prints',
  triggersEnter: [function(context, redirect) {
    if(!Meteor.userId()) {
      redirect('login');
    }
  }]
});

printRoutes.route('/', {
  name: 'list',
  subscriptions: function() {
    this.register('admin_prints', Meteor.subscribe('prints_admin'));
    this.register('admin_publications', Meteor.subscribe('publications'));
  },
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_prints_list" });
  }
});

printRoutes.route('/create', {
  name: 'create',
  subscriptions: function() {
    this.register('admin_artists', Meteor.subscribe('artists'));
    this.register('admin_publications', Meteor.subscribe('publications'));
  },
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_prints_create" });
  }
});