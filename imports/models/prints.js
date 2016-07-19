import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.publish('print_search', function (queryString) {
    return Prints.find({$text: {$search: queryString}});
  });

  Meteor.publish('print_by_id', function (id) {
    return Prints.find({id: id});
  });
}

export const Prints = new Mongo.Collection('prints');