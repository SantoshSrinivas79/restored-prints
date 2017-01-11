import "./search.html";
import "./search.scss"

import { Template } from 'meteor/templating';
import FlowRouter from 'meteor/kadira:flow-router';
import Prints from '../../../collections/prints/model';
import Publications from '../../../collections/publications/model';

const CHUNK_SIZE = 3;
const PAGE_COUNT = 3;

Template.search.onCreated(function() {
  const self = this;
  self.autorun(() => {
    const query = FlowRouter.getParam('query') || '';
    const page = FlowRouter.getParam('page') || 0;

    self.subscribe('print_search', {query: query, page: page, count: PAGE_COUNT});
    self.subscribe('publications');
  })
});

function chunkSearchResults(results) {
  let chunks = [];
  while (results.length > CHUNK_SIZE) {
    chunks.push({row: results.slice(0, CHUNK_SIZE)});
    results = results.slice(CHUNK_SIZE);
  }
  chunks.push({row: results});
  return chunks;
}

Template.search.helpers({
  search_results() {
    let prints = Prints.find({});

    return chunkSearchResults(prints);
  },
  search_result_count() {
    return Counts.get('print_search_count');
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
    return FlowRouter.url('print', {id: this._id});
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

Template.search_pagination.helpers({
  is_current_page(page) {
    const current_page = FlowRouter.getParam('page') || 0;
    return current_page == page;
  },
  enabled() {
    const page_count = Math.ceil(Counts.get('print_search_count') / PAGE_COUNT);
    return page_count != 1;
  },
  pages() {
    let output = [];
    const page_count = Math.ceil(Counts.get('print_search_count') / PAGE_COUNT);
    for(let i = 0; i < page_count; i++) {
      let page = {page: i};

      if(i === 0) {
        page.path = FlowRouter.path('search', {query: FlowRouter.getParam('query')});
      } else {
        page.path = FlowRouter.path('search', {query: FlowRouter.getParam('query'), page: i})
      }

      output.push(page);
    }

    return output;
  },
  previous_enabled() {
    const current_page = FlowRouter.getParam('page') || 0;
    return (current_page == 0) ? 'disabled' : ''
  },
  previous_path() {
    const current_page = FlowRouter.getParam('page') || 0;
    if(current_page == 0) {
      return '';
    }

    return FlowRouter.path('search', {query: FlowRouter.getParam('query'), page: current_page - 1})
  },
  next_enabled() {
    const current_page = FlowRouter.getParam('page') || 0;
    return (current_page == Math.ceil(Counts.get('print_search_count') / PAGE_COUNT) - 1) ? 'disabled' : ''
  },
  next_path() {
    const current_page = FlowRouter.getParam('page') || 0;
    if(current_page == (Math.ceil(Counts.get('print_search_count') / PAGE_COUNT) - 1)) {
      return '';
    }

    return FlowRouter.path('search', {query: FlowRouter.getParam('query'), page: parseInt(current_page) + 1})
  }
});