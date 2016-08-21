import Categories from './model';

if (Meteor.isServer) {
  Meteor.publish('categories', function () {
    return Categories.find({});
  });

  Meteor.publish('category_by_id', function(id) {
    return Categories.find({_id: id});
  });
}