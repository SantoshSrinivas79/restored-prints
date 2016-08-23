import Publications from './model';

if (Meteor.isServer) {
  Meteor.publish('publications', function () {
    return Publications.find({});
  });

  Meteor.publish('publications_by_id', function(id) {
    return Publications.find({_id: id});
  });
}