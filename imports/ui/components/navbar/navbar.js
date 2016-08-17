import './navbar.html';
import './navbar.scss';

import { Categories } from '../../../collections/categories/model';
import { CONSTANTS } from '../../../common/constants';

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
    return Categories.find({type: CONSTANTS.CATEGORIES.WILDLIFE});
  },
  category_art() {
    return Categories.find({type: CONSTANTS.CATEGORIES.ART});
  }
});

Template.navbar.events({
  'submit #search_form'(event) {
    event.preventDefault();
    var query = event.target.query.value;
    FlowRouter.go('/search/' + query);
  }
});