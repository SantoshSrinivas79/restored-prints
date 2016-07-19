import '../imports/pages/layout';
import '../imports/pages/home/home';
import '../imports/pages/search/search';
import '../imports/pages/print/print';
import '../imports/pages/404/404';
import './main.less';

import './admin/admin';

FlowRouter.subscriptions = function() {
  this.register('categories', Meteor.subscribe('categories'));
};

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('layout', { main: "home" });
  }
});

FlowRouter.route('/search', {
  name: 'search',
  subscriptions: function(params, queryParams) {
    this.register('search_results', Meteor.subscribe('print_search', queryParams.c));
    this.register('search_publications', Meteor.subscribe('publications'));
  },
  action: function() {
    BlazeLayout.render('layout', { main: "search" });
  }
});

FlowRouter.route('/print/:ref', {
  name: 'print',
  subscriptions: function(params) {
    this.register('print', Meteor.subscribe('print_by_ref', params.ref));
  },
  action: function() {
    BlazeLayout.render('layout', { main: "print" });
  }
});

// FlowRouter.route('/404', function () {
//   this.render('404');
// });