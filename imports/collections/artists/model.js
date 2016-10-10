import { Mongo } from 'meteor/mongo';
import ArtistSchema from './schema';

var artists = new Mongo.Collection('artists');
artists.attachSchema(ArtistSchema);

export default Artists = artists;