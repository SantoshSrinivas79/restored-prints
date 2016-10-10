import { Mongo } from 'meteor/mongo';
import PrintSchema from './schema.js';

var prints = new Mongo.Collection('prints');
prints.attachSchema(PrintSchema);

export default Prints = prints;