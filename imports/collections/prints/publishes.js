import { Prints } from './model';

if (Meteor.isServer) {
  Meteor.publish('prints_main', function() {
    return Prints.find({is_enabled: true});
  });

  Meteor.publish('prints_home_page', function() {
    return Prints.find({}, {fields: {is_enabled: false}, limit: 4});
  });

  Meteor.publish('print_search', function (queryString) {
    return Prints.find({$text: {$search: queryString}}, {fields: {is_enabled: false}});
  });

  Meteor.publish('print_by_ref', function (ref) {
    return Prints.find({ref: ref});
  });

  ///////// ADMIN
  Meteor.publish('prints_admin', function () {
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    return Prints.find({});
  });
}