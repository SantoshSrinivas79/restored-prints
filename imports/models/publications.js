import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.publish('publications', function () {
    return Publications.find({});
  });
}

export const Publications = new Mongo.Collection('publications');