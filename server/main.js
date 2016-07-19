import { Meteor } from 'meteor/meteor';
import { Prints } from '../imports/models/prints';
import { Publications } from '../imports/models/publications';
import { Categories } from '../imports/models/categories';
import * as constants from '../imports/lib/constants';

Meteor.startup(() => {
  Prints.remove({});
  Publications.remove({});
  Categories.remove({});

  Prints._ensureIndex({
    title: 'text',
    latin_title_historic: 'text',
    latin_title_modern: 'text',
    publication: 'text',
    lithograph_by: 'text',
    painting_by: 'text',
    description: 'text',
    tags: 'text'
  }, {
    name: 'print_search_index'
  });

  for(var i = 0; i < 9; i++) {
    Prints.insert({
      id: 'JGD022',
      title:  'Kingfisher',
      latin_title_historic: 'Alcedo isipda, Linn.',
      latin_title_modern: 'Alcedo atthis',
      publication: '#birds-of-europe',
      lithograph_by: ['John Gould', 'Elizabeth Gould'],
      painting_by: ['John Gould', 'Elizabeth Gould'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      prices: [
        {
          title: 'A3+',
          inches: '19x13',
          mms: '483x330',
          price: 45.00
        }, {
          title: 'A2+',
          inches: '30x20',
          mms: '600x430',
          price: 70.00
        }
      ],
      tags: [
        'birds', 'american'
      ]
    });
  }

  for(var i = 0; i < 5; i++) {
    Publications.insert({
      title: 'The Birds of Europe',
      author: ['John Gould'],
      first_published: 1817,
      last_published: 1837
    });
  }

  Categories.insert({title: 'Birds', type: constants.WILDLIFE_CATEGORY });
  Categories.insert({title: 'Mammals', type: constants.WILDLIFE_CATEGORY });
  Categories.insert({title: 'Reptiles', type: constants.WILDLIFE_CATEGORY });
  Categories.insert({title: 'Fish', type: constants.WILDLIFE_CATEGORY });
  Categories.insert({title: 'Flora', type: constants.WILDLIFE_CATEGORY });
  Categories.insert({title: 'Fungi', type: constants.WILDLIFE_CATEGORY });

  Categories.insert({title: 'American', type: constants.ART_CATEGORY });
  Categories.insert({title: 'European', type: constants.ART_CATEGORY });
});
