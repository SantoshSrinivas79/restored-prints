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

      print.publication = Publications.findOne({_id: print.publication});
      print.date_added = moment().unix();
      print.is_enabled = true;
    },
    'prints.toggle-publish'(printId, enabled) {
      if(!Security.can(Meteor.userId()).update(printId).for(Prints).check()) {
        throw new Meteor.Error('not-authorized');
      }

      Prints.update(printId, {$set: { is_enabled: enabled }});
    }
  });
}