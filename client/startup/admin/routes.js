import '../../../imports/ui/layouts/admin/layout';
import '../../../imports/ui/pages/admin/login/login';
import '../../../imports/ui/pages/admin/prints/list/list';
import '../../../imports/ui/pages/admin/prints/edit/edit';
import '../../../imports/ui/pages/admin/prints/create/create';
import '../../../imports/ui/pages/admin/categories/list/list';
import '../../../imports/ui/pages/admin/categories/edit/edit';
import '../../../imports/ui/pages/admin/categories/create/create';
import '../../../imports/ui/pages/admin/publications/list/list';
import '../../../imports/ui/pages/admin/publications/edit/edit';
import '../../../imports/ui/pages/admin/publications/create/create';
import '../../../imports/ui/pages/admin/artists/list/list';
import '../../../imports/ui/pages/admin/artists/edit/edit';
import '../../../imports/ui/pages/admin/artists/create/create';

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
    if(Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      redirect('/admin/prints');
    }
  }]
});

var printsRoutes = adminRoutes.group({
  prefix: '/prints',
  name: 'prints',
  triggersEnter: [function(context, redirect) {
    if(!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      redirect('login');
    }
  }]
});

printsRoutes.route('/', {
  name: 'list',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_prints_list" });
  }
});

printsRoutes.route('/create', {
  name: 'create',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_prints_create" });
  }
});

var categoryRoutes = adminRoutes.group({
  prefix: '/categories',
  name: 'categories'
});

categoryRoutes.route('/', {
  name: 'list',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_categories_list" })
  }
});

categoryRoutes.route('/create', {
  name: 'create',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_categories_create" })
  }
});

categoryRoutes.route('/edit/:id', {
  name: 'edit',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_categories_edit" })
  }
});

var publicationRoutes = adminRoutes.group({
  prefix: '/publications',
  name: 'publications'
});

publicationRoutes.route('/', {
  name: 'list',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_publications_list" })
  }
});

publicationRoutes.route('/create', {
  name: 'create',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_publications_create" })
  }
});

publicationRoutes.route('/edit/:id', {
  name: 'edit',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_publications_edit" })
  }
});

var artistGroup = adminRoutes.group({
  prefix: '/artists',
  name: 'artists'
});

artistGroup.route('/', {
  name: 'list',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_artists_list" })
  }
});

artistGroup.route('/create', {
  name: 'create',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_artists_create" })
  }
});

artistGroup.route('/edit/:id', {
  name: 'edit',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_artists_edit" })
  }
});