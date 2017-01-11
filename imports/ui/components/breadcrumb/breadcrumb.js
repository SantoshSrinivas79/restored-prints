import './breadcrumb.html';
import FlowRouter from 'meteor/kadira:flow-router';

function getCurrentRoute() {
  return FlowRouter.current().route;
}

function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

Template.breadcrumb.helpers({
  parent_route_path() {
    return getCurrentRoute().group.prefix + '/';
  },
  parent_route_name() {
    const route = getCurrentRoute().group.name;
    return upperCaseFirst(route);
  },
  current_route_path() {
    return getCurrentRoute().path;
  },
  current_route_name() {
    return upperCaseFirst(getCurrentRoute().name);
  }
});