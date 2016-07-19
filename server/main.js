import { Meteor } from 'meteor/meteor';
import { Prints } from '../imports/models/prints';
import { Publications } from '../imports/models/publications';

Meteor.startup(() => {
  Prints.remove({});
  Publications.remove({});

  var print_search_index = 'whatever_you_want_to_call_it_less_than_128_characters';
  // Prints._dropIndex(print_search_index);
  Prints._ensureIndex({
    id: 'text',
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

  Prints.insert({
    id: 'JGD023',
    title:  'Heron',
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
        price: 30.00
      }
    ],
    tags: [
      'birds', 'european'
    ]
  });

  Publications.insert({
    id: '#birds-of-europe',
    title: 'The Birds of Europe',
    author: ['John Gould'],
    first_published: 1817,
    last_published: 1837
  });

  // code to run on server at startup
});
