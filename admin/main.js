import './pages/layout';
import './pages/home/home';

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
});

adminRoutes.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('layout', { main: "home" });
  }
});