import "./layout.html"
import "../components/navbar/navbar";
import "../components/preloader/preloader";

Template.registerHelper("isReady", function (sub) {
  if(sub) {
    return FlowRouter.subsReady(sub);
  } else {
    return FlowRouter.subsReady();
  }
});

Template.registerHelper('truncate', function(stringToShorten, maxCharsAmount){
  if(stringToShorten.length > maxCharsAmount){
    return stringToShorten.substring(0, maxCharsAmount) + '...';
  }
  return stringToShorten;
});

Template.layout.onCreated(function() {
  var self = this;
  self.autorun(() => {
    self.subscribe('categories');
  })
});

Template.search_bar.helpers({
  search_query: function() {
    return Session.get('search_query');
  }
});

Template.search_bar.events({
  'keyup #search': _.debounce(function (event) {
    var query = event.target.value;

    Session.set('search_query', query);

    if (FlowRouter.getRouteName() !== 'search') {
      FlowRouter.go('/search');
    }
  }, 300)
});
