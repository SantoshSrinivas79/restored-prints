import '../../../imports/ui/layouts/layout';
import '../../../imports/ui/pages/home/home';
import '../../../imports/ui/pages/print/print';
import '../../../imports/ui/pages/search/search';
import '../../../imports/ui/pages/404/404';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('layout', { main: "home" });
  }
});

FlowRouter.route('/search/:query?/:page?', {
  name: 'search',
  action() {
    BlazeLayout.render('layout', { main: "search" });
  }
});

FlowRouter.route('/print/:id', {
  name: 'print',
  action() {
    BlazeLayout.render('layout', { main: "print" });
  }
});