import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Fixtures from './fixtures';

import '../../imports/collections/artists/model';
import '../../imports/collections/artists/methods';
import '../../imports/collections/artists/publishes';

import '../../imports/collections/categories/model';
import '../../imports/collections/categories/methods';
import '../../imports/collections/categories/publishes';

import '../../imports/collections/prints/model';
import '../../imports/collections/prints/methods';
import '../../imports/collections/prints/publishes';

import '../../imports/collections/publications/model';
import '../../imports/collections/publications/methods';
import '../../imports/collections/publications/publishes';

Meteor.startup(() => {
  Fixtures.cleanDatabase();
  Fixtures.buildIndexes();
  Fixtures.runFixtures();

  if (Meteor.isServer) {
    Meteor.methods({
      'auth.login'(username, password) {
        check(username, String);
        check(password, String);

        if(username !== CONFIG.AUTH.USERNAME || password !== CONFIG.AUTH.PASSWORD) {
          throw new Meteor.Error('not-authorized');
        }

        this.setUserId(1);
      }
    });
  }
});