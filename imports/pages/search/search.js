import { Template } from 'meteor/templating';
import { Prints } from '../../models/prints';

import "../../components/search_print/search_print";
import "./search.html";

Template.search.helpers({
  search_results() {
    return Prints.find({});
  },
  search_result_count() {
    return Prints.find({}).count();
  },
});