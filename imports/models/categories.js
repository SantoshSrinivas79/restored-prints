import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.publish('categories', function () {
    return Categories.find({});
  });
}

export const Categories = new Mongo.Collection('categories');