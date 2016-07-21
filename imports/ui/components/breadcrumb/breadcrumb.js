import './breadcrumb.html';

var getCurrentRoute = function() {
  return FlowRouter.current().route;
};

var upperCaseFirst = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
};

Template.breadcrumb.helpers({
  parent_route_path() {
    return getCurrentRoute().group.prefix;
  },
  parent_route_name() {
    var route = getCurrentRoute().group.name;
    return upperCaseFirst(route);
  },
  current_route_path() {
    return getCurrentRoute().path;
  },
  current_route_name() {
    return upperCaseFirst(getCurrentRoute().name);
  }
});