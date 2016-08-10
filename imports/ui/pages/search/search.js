import "./search.html";
import "./search.scss"

import { Template } from 'meteor/templating';
import { Prints } from '../../../collections/prints/model';
import { Publications } from '../../../collections/publications/model';

var size = 5;

Template.search.onCreated(function() {
  var self = this;
  self.autorun(() => {
    self.subscribe('print_search');
    self.subscribe('publications');
  })
});

var chunkSearchResults = function(results) {
  var chunks = [];
  while (results.length > size) {
    chunks.push({ row: results.slice(0, size)});
    results = results.slice(size);
  }
  chunks.push({row: results});
  return chunks;
};

Template.search.helpers({
  search_results() {
    var query = Session.get('search_query');

    var prints;
    if(query){
      prints = Prints.find({
        $or: [
          {'title': {$regex: query, $options: 'i'}}
        ]
      });
    } else {
      prints = Prints.find({});
    }

    return chunkSearchResults(prints);
  },
  search_result_count() {
    return Prints.find({}).count();
  },
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

Template.search_print.helpers({
  path() {
    var result = this;
    return FlowRouter.url('print', {ref: result._id});
  },
  price_from() {
    if(this.prices.length === 1) {
      return this.prices[0].price;
    } else {
      return "From " + Math.min.apply(Math, this.prices.map(function(price){return price.price;}))
    }

  },
  truncate(string, length) {
    return string.substring(0, length) + '...';
  }
});