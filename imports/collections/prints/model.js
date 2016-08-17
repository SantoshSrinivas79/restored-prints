import { Mongo } from 'meteor/mongo';

var prints = new Mongo.Collection('prints');

prints.attachSchema(new SimpleSchema({
  _id: {
    type: String,
    label: "Ref",
    max: 50
  },
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  latin_title_historic: {
    type: String,
    label: "Historic Latin Title",
    max: 200
  },
  latin_title_modern: {
    type: String,
    label: "Modern Latin Title",
    max: 200
  },
  publication: {
    type: Object
  },
  lithograph_by: {
    type: [String],
    label: "Lithograph Artists",
    optional: true
  },
  painting_by: {
    type: [String],
    label: "Artists",
    optional: true
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
    max: 1000
  },
  prices: {
    type: [Object],
    label: "Prices",
    minCount: 1
  },
  tags: {
    type: [String],
    label: "Tags"
  },
  image_url: {
    type: String,
    label: "Image",
    regEx: SimpleSchema.RegEx.Url
  },
  date_added: {
    type: Number,
    defaultValue: moment().unix(),
  },
  is_enabled: {
    type: Boolean,
    defaultValue: true
  }
}));

export default Prints = prints;