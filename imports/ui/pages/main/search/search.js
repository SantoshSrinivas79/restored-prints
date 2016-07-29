import "./search.html";
import "./search.scss"

import { Template } from 'meteor/templating';
import { Prints } from '../../../../collections/prints/model';
import { Publications } from '../../../../collections/publications/model';

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
    return FlowRouter.url('print', {ref: result.ref});
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