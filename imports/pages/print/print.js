import { Template } from 'meteor/templating';
import { Prints } from '../../models/prints';

import './print.html';

Template.print.helpers({
  print_obj() {
    return Prints.findOne({});
  }
});