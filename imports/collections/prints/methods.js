import { check } from 'meteor/check';
import Prints from './model';
import Publications from '../publications/model';

if (Meteor.isServer) {
  Meteor.methods({
    'prints.insert'(print) {
      // Decommission
      if (!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }

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
        publication: Publications.findOne({_id: print.publication}),
        lithograph_by: print.lithograph_by,
        painting_by: print.painting_by,
        description: print.description,
        prices: print.prices,
        categories: print.categories,
        image_url: print.image_url,
        date_added: moment().unix(),
        is_enabled: true
      });
    },
    'prints.toggle-publish'(printId, enabled) {
      if(!Security.can(Meteor.userId()).update(printId).for(Prints).check()) {
        throw new Meteor.Error('not-authorized');
      }

      Prints.update(printId, {$set: { is_enabled: enabled }});
    }
  });
}