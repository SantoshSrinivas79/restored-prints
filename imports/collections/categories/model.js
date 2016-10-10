import { Mongo } from 'meteor/mongo';
import CategorySchema from './schema';

var categories = new Mongo.Collection('categories');
categories.attachSchema(CategorySchema);

export default Categories = categories;