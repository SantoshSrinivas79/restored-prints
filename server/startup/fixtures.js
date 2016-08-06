import { Prints } from '../../imports/collections/prints/model';
import { Publications } from '../../imports/collections/publications/model';
import { Categories } from '../../imports/collections/categories/model';
import { Artists } from '../../imports/collections/artists/model';
import { CONSTANTS } from '../../imports/common/constants';

class Fixtures {
  cleanDatabase() {
    Prints.remove({});
    Publications.remove({});
    Categories.remove({});
    Artists.remove({});
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
      authors: ['John Gould'],
      first_published: 1817,
      last_published: 1837
    });

    for(var i = 0; i < 10; i++) {
      Prints.insert({
        _id: 'JGD022'+ i,
        title:  'Kingfisher' + i,
        latin_title_historic: 'Alcedo isipda, Linn.',
        latin_title_modern: 'Alcedo atthis',
        publication: publication,
        lithograph_by: ['John Gould', 'Elizabeth Gould'],
        painting_by: ['John Gould', 'Elizabeth Gould'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        prices: [
          {
            mmx: 100,
            mmy: 100,
            price: 35.00
          }, {
            mmx: 200,
            mmy: 200,
            price: 70.00
          }
        ],
        tags: [
          'birds', 'american'
        ],
        image_url: 'http://placehold.it/420x420',
        date_added: moment().unix(),
        is_enabled: true
      });
    }

    Categories.insert({title: 'Birds', type: CONSTANTS.CATEGORIES.WILDLIFE });
    Categories.insert({title: 'Mammals', type: CONSTANTS.CATEGORIES.WILDLIFE });
    Categories.insert({title: 'Reptiles', type: CONSTANTS.CATEGORIES.WILDLIFE });
    Categories.insert({title: 'Fish', type: CONSTANTS.CATEGORIES.WILDLIFE });
    Categories.insert({title: 'Flora', type: CONSTANTS.CATEGORIES.WILDLIFE });
    Categories.insert({title: 'Fungi', type: CONSTANTS.CATEGORIES.WILDLIFE });

    Categories.insert({title: 'American', type: CONSTANTS.CATEGORIES.ART });
    Categories.insert({title: 'European', type: CONSTANTS.CATEGORIES.ART });

    Artists.insert({title: 'John Gould'});
    Artists.insert({title: 'Elizabeth Gould'});
  }
}

export default new Fixtures();