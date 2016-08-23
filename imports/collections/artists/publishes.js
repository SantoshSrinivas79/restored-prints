import Artists from './model';

if (Meteor.isServer) {
  Meteor.publish('artists', function () {
    return Artists.find({});
  });

  Meteor.publish('artist_by_id', function(id) {
    return Artists.find({_id: id});
  });
}
