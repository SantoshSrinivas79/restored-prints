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

FlowRouter.route('/search', {
  name: 'search',
  action() {
    BlazeLayout.render('layout', { main: "search" });
  },
  triggersExit: [
      function() {
        Session.set('search_query', '');
      }
  ]
});

FlowRouter.route('/print/:id', {
  name: 'print',
  subscriptions(params) {
    this.register('print', Meteor.subscribe('print_by_ref', params.id));
    this.register('publications', Meteor.subscribe('publications'));
  },
  action() {
    BlazeLayout.render('layout', { main: "print" });
  }
});