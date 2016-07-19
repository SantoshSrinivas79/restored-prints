import { Template } from 'meteor/templating';
import { Prints } from '../../models/prints';
import { Publications } from '../../models/publications';

import "../../components/search_print/search_print";
import "../../components/preloader/preloader";
import "./search.html";

var size = 5;

Template.search.helpers({
  search_results() {
    var prints = Prints.find({});
    var chunks = [];
    while (prints.length > size) {
      chunks.push({ row: prints.slice(0, size)});
      prints = prints.slice(size);
    }
    chunks.push({row: prints});
    return chunks;
  },
  search_result_count() {
    return Prints.find({}).count();
  },
});

Template.search_input.events({
  'submit #search'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.query.value;

    FlowRouter.go('/search/' + text);
  }
});

Template.search_refinement.onRendered(function() {
  this.autorun(() => {
    $('#search_refinement').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
});

Template.search_refinement.helpers({
  publications() {
    return Publications.find({});
  }
});