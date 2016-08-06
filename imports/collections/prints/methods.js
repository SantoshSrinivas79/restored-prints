import { check } from 'meteor/check';
import { Prints } from './model';

if (Meteor.isServer) {
  Meteor.methods({
    'prints.insert'(print) {
      check(print, Object);
      check(print.ref, String);
      check(print.publication, String);
      check(print.title, String);
      check(print.prices, Array);

      Prints.insert({
        _id: print.ref,
        title: print.title,
        latin_title_historic: print.latin_title_historic,
        latin_title_modern: print.latin_title_modern,
        publication: print.publication,
        lithograph_by: print.lithograph_by,
        painting_by: print.painting_by,
        description: print.description,
        prices: print.prices,
        tags: print.tags,
        image_url: print.image_url,
        date_added: moment().unix(),
        is_enabled: true
      });
    },
    'prints.remove'(printId) {
      check(printId, String);

      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Prints.remove({id: printId});
    },
    'prints.update'(printId, print) {
      check(printId, String);
      check(print, Object);

      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Prints.update(printId, print);
    },
    'prints.toggle-publish'(printId, enabled) {
      // if (!this.userId) {
      //   throw new Meteor.Error('not-authorized');
      // }

      Prints.update(printId, {$set: { is_enabled: enabled }});
    }
  });
}