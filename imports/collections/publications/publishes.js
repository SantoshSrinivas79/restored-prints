import { Publications } from './model';

if (Meteor.isServer) {
  Meteor.publish('publications', function () {
    return Publications.find({});
  });
}