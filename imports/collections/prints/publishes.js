import { Prints } from './model';

if (Meteor.isServer) {
  Meteor.publish('prints', function() {
    return Prints.find({is_enabled: true}, {sort: {date_added: 1}});
  });

  Meteor.publish('prints_home_page', function() {
    return Prints.find(
        {is_enabled: true},
        {fields: {is_enabled: false}, limit: 4});
  });

  Meteor.publish('print_search', function (parameters) {
    Counts.publish(this, 'print_search_count', Prints.find({
      $or: [
        {'title': {$regex: parameters.query, $options: 'i'}}
      ],
      is_enabled: true
    }));

    return Prints.find(
      {
        $or: [
          {'title': {$regex: parameters.query, $options: 'i'}}
        ],
        is_enabled: true
      },
      {
        fields: {
          _id: 1,
          title:  1,
          latin_title_historic: 1,
          latin_title_modern: 1,
          "publication.title": 1,
          "publication.authors": 1,
          lithograph_by: 1,
          painting_by: 1,
          description: 1,
          tags: 1,
          image_url: 1,
        },
        skip: parameters.page * parameters.count,
        limit: parameters.count
      }
    );
  });

  Meteor.publish('print_by_id', function (id) {
    return Prints.find({_id: id, is_enabled: true}, {fields: {is_enabled: false}});
  });

  ///////// ADMIN
  Meteor.publish('prints_admin', function () {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    return Prints.find({});
  });
}