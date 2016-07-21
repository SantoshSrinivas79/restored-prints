import { Prints } from './model';

if (Meteor.isServer) {
  Meteor.publish('print_search', function (queryString) {
    return Prints.find({$text: {$search: queryString}}, {fields: {is_enabled: false}});
  });

  Meteor.publish('print_by_ref', function (ref) {
    return Prints.find({ref: ref});
  });

  ///////// ADMIN
  Meteor.publish('prints', function () {
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    return Prints.find({});
  });
}