import { Prints } from '../../collections/prints/model';
import { Publications } from '../../collections/publications/model';
import { Categories } from '../../collections/categories/model';

import * as constants from '../../lib/constants';

class Fixtures {
  cleanDatabase() {
    Prints.remove({});
    Publications.remove({});
    Categories.remove({});
  };

  buildIndexes() {
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
  };

  runFixtures() {
    var publication = Publications.insert({
      title: 'The Birds of Europe',
      author: ['John Gould'],
      first_published: 1817,
      last_published: 1837
    });

    for(var i = 0; i < 10; i++) {
      Prints.insert({
        ref: 'JGD022',
        title:  'Kingfisher',
        latin_title_historic: 'Alcedo isipda, Linn.',
        latin_title_modern: 'Alcedo atthis',
        publication: publication,
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
        ],
        image: 'http://placehold.it/420x420',
        thumbnail: 'http://placehold.it/100x100',
        date_added: moment().unix() + (10000 * i),
        is_enabled: true
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
  }
}

export default new Fixtures();