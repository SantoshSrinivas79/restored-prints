import { Mongo } from 'meteor/mongo';

var publications = new Mongo.Collection('publications');
publications.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  authors: {
    type: [String],
    label: "Authors",
    minCount: 1
  },
  first_published: {
    type: Number,
    label: "First Published"
  },
  last_published: {
    type: Number,
    label: "Last Published"
  }
}));

export default Publications = publications;