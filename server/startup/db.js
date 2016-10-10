import Prints from '../../imports/collections/prints/model';
import Publications from '../../imports/collections/publications/model';
import Categories from '../../imports/collections/categories/model';
import Artists from '../../imports/collections/artists/model';
import Constants from '../../imports/common/constants';

class Fixtures {
  cleanDatabase() {
    Prints.remove({});
    Publications.remove({});
    Categories.remove({});
    Artists.remove({});
    Meteor.users.remove({});
  };

  setSecurity() {
    Security.permit(['insert', 'update', 'remove'])
        .collections([Prints, Publications, Categories, Artists])
        .ifHasRole('admin')
        .allowInClientCode();
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
        publication: Publications.findOne({_id: publication}),
        lithograph_by: [],
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
        categories: [
          'birds', 'american'
        ],
        image_url: 'http://placehold.it/420x420',
        date_added: moment().unix(),
        is_enabled: true
      });
    }

    Categories.insert({title: 'Birds', type: Constants.CATEGORIES.WILDLIFE });
    Categories.insert({title: 'Mammals', type: Constants.CATEGORIES.WILDLIFE });
    Categories.insert({title: 'Reptiles', type: Constants.CATEGORIES.WILDLIFE });
    Categories.insert({title: 'Fish', type: Constants.CATEGORIES.WILDLIFE });
    Categories.insert({title: 'Flora', type: Constants.CATEGORIES.WILDLIFE });
    Categories.insert({title: 'Fungi', type: Constants.CATEGORIES.WILDLIFE });

    Categories.insert({title: 'American', type: Constants.CATEGORIES.ART });
    Categories.insert({title: 'European', type: Constants.CATEGORIES.ART });

    Artists.insert({name: 'John Gould'});
    Artists.insert({name: 'Elizabeth Gould'});

    var userId = Accounts.createUser({
      username: 'admin',
      email: 'tomhalley89@gmail.com',
      password: 'password'
    });

    Roles.addUsersToRoles(userId, ['admin']);
  }
}

export default new Fixtures();