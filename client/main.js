import '../imports/pages/layout';
import '../imports/pages/home/home';
import '../imports/pages/search/search';
import '../imports/pages/print/print';
import '../imports/pages/404/404';
import './main.less';

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('layout', { main: "home" });
  }
});

FlowRouter.route('/search/:query', {
  name: 'search',
  subscriptions: function(params) {
    this.register('search_results', Meteor.subscribe('print_search', params.query));
    this.register('search_publications', Meteor.subscribe('publications'));
  },
  action: function() {
    BlazeLayout.render('layout', { main: "search" });
  }
});

FlowRouter.route('/print/:id', {
  name: 'print',
  subscriptions: function(params) {
    this.register('print', Meteor.subscribe('print_by_id', params.id));
  },
  action: function() {
    BlazeLayout.render('layout', { main: "print" });
  }
});

// FlowRouter.route('/404', function () {
//   this.render('404');
// });