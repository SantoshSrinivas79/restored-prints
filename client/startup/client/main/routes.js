import '../../../../imports/ui/layouts/main/layout';
import '../../../../imports/ui/pages/main/home/home';
import '../../../../imports/ui/pages/main/print/print';
import '../../../../imports/ui/pages/main/search/search';
import '../../../../imports/ui/pages/main/404/404';

FlowRouter.subscriptions = function() {
  this.register('categories', Meteor.subscribe('categories'));
};

FlowRouter.route('/', {
  name: 'home',
  subscriptions() {
    this.register('prints_home_page', Meteor.subscribe('prints_main'));
  },
  action() {
    BlazeLayout.render('layout', { main: "home" });
  }
});

FlowRouter.route('/search', {
  name: 'search',
  subscriptions(params, queryParams) {
    this.register('search_results', Meteor.subscribe('prints_main', queryParams.c));
    this.register('search_publications', Meteor.subscribe('publications'));
  },
  action() {
    BlazeLayout.render('layout', { main: "search" });
  }
});

FlowRouter.route('/print/:ref', {
  name: 'print',
  subscriptions(params) {
    this.register('print', Meteor.subscribe('print_by_ref', params.ref));
    this.register('publications', Meteor.subscribe('publications'));
  },
  action() {
    BlazeLayout.render('layout', { main: "print" });
  }
});