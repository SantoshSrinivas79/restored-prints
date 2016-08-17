import { Mongo } from 'meteor/mongo';
import Constants from '../../common/constants';

var categories = new Mongo.Collection('categories');
categories.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  type: {
    type: Number,
    label: "Type",
    allowedValues: _.map(Constants.CATEGORIES, function(val) {
      return val;
    })
  }
}));

export const Categories = categories;