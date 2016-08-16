import { Meteor } from 'meteor/meteor';

import Fixtures from './db';

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
  Fixtures.setSecurity();

  if (Meteor.isServer) {
    Accounts.config({
      forbidClientAccountCreation : true
    });
  }
});
