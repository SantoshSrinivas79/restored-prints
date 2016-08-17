import Artists from './model';

if (Meteor.isServer) {
  Meteor.publish('artists', function () {
    return Artists.find({});
  });
}
