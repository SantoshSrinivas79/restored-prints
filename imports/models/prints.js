import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

if (Meteor.isServer) {
  Meteor.publish('print_search', function (queryString) {
    return Prints.find({$text: {$search: queryString}});
  });

  Meteor.publish('print_by_ref', function (ref) {
    return Prints.find({ref: ref});
  });

  Meteor.methods({
    'prints.insert'(print) {
      check(print, Object);
      check(print.ref, String);
      check(print.title, String);
      check(print.prices, Array);

      if (! this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Prints.insert({
        ref: print.ref,
        title:  print.title,
        latin_title_historic: print.latin_title_historic,
        latin_title_modern: print.latin_title_modern,
        publication: print.publication,
        lithograph_by: print.lithograph_by,
        painting_by: print.painting_by,
        description: print.description,
        prices: print.prices,
        tags: print.tags
      });
    },
    'prints.remove'(printId) {
      check(printId, String);

      if (! this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Prints.remove({id: printId});
    },
    'prints.update'(printId, print) {
      check(printId, String);
      check(print, Object);

      if (! this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Prints.update(printId, print);
    },
  });
}

export const Prints = new Mongo.Collection('prints');