import '../../../imports/ui/layouts/admin/layout';
import '../../../imports/ui/pages/admin/login/login';
import '../../../imports/ui/pages/admin/prints/list/list';
import '../../../imports/ui/pages/admin/prints/edit/edit';
import '../../../imports/ui/pages/admin/prints/create/create';
import '../../../imports/ui/pages/admin/categories/create/create';
import '../../../imports/ui/pages/admin/categories/list/list';

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

var categoriesRoutes = adminRoutes.group({
  prefix: '/categories',
  name: 'categories'
});

categoriesRoutes.route('/', {
  name: 'list',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_categories_list"})
  }
});

categoriesRoutes.route('/create', {
  name: 'create',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_categories_create"})
  }
});
