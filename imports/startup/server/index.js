import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import './config';

import Fixtures from './fixtures';

import '../../collections/artists/model';
import '../../collections/artists/methods';
import '../../collections/artists/publishes';

import '../../collections/categories/model';
import '../../collections/categories/methods';
import '../../collections/categories/publishes';

import '../../collections/prints/model';
import '../../collections/prints/methods';
import '../../collections/prints/publishes';

import '../../collections/publications/model';
import '../../collections/publications/methods';
import '../../collections/publications/publishes';

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
