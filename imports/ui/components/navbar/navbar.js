import { Categories } from '../../../collections/categories/model';
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
    return Categories.find({type: Module.both.constants.CATEGORIES.WILDLIFE});
  },
  category_art() {
    return Categories.find({type: Module.both.constants.CATEGORIES.ART});
  }
});