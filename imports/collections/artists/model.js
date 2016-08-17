import { Mongo } from 'meteor/mongo';

var artists = new Mongo.Collection('artists');
artists.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  }
}));

export const Artists = artists;