import './pages/layout';
import './pages/home/home';
import './pages/prints/list/list';
import './pages/prints/create/create';

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
});

adminRoutes.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('admin_layout', { main: "admin_home" });
  }
});

var printRoutes = adminRoutes.group({
  prefix: '/prints',
  name: 'prints'
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