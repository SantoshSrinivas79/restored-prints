import '../../../imports/ui/layouts/admin/layout';
import '../../../imports/ui/pages/admin/login/login';
import '../../../imports/ui/pages/admin/prints/list/list';
import '../../../imports/ui/pages/admin/prints/edit/edit';
import '../../../imports/ui/pages/admin/prints/create/create';
import '../../../imports/ui/pages/admin/categories/list/list';
import '../../../imports/ui/pages/admin/categories/edit/edit';
import '../../../imports/ui/pages/admin/categories/create/create';

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

adminRoutes.group({
  prefix: '/prints',
  name: 'prints',
  triggersEnter: [function(context, redirect) {
    if(!Meteor.userId()) {
      redirect('login');
    }
  }]
}).route('/', {
  name: 'list',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_prints_list" });
  }
}).route('/create', {
  name: 'create',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_prints_create" });
  }
});

adminRoutes.group({
  prefix: '/categories',
  name: 'categories'
}).route('/', {
  name: 'list',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_categories_list" })
  }
}).route('/create', {
  name: 'create',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_categories_create" })
  }
}).route('/edit/:id', {
  name: 'edit',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_categories_edit" })
  }
});

adminRoutes.group({
  prefix: '/publications',
  name: 'publications'
}).route('/', {
  name: 'list',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_publications_list" })
  }
})
