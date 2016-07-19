import { Categories } from '../../../imports/models/categories';
import * as constants from '../../../imports/lib/constants';
import './navbar.html';

Template.navbar.onRendered(function() {
  this.autorun(() => {
    $(".dropdown-button").dropdown();
  });
});

Template.navbar.helpers({
  path() {
    return FlowRouter.path('search', {}, {c: this.title.toLowerCase()});
  },
  category_wildlife() {
    return Categories.find({type: constants.WILDLIFE_CATEGORY});
  },
  category_art() {
    return Categories.find({type: constants.ART_CATEGORY});
  }
});