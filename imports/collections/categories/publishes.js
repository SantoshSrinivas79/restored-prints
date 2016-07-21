import { Categories } from './model';

if (Meteor.isServer) {
  Meteor.publish('categories', function () {
    return Categories.find({});
  });
}