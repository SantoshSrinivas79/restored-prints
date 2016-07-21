import { Template } from 'meteor/templating';
import { Prints } from '../../../../collections/prints/model';

import './print.html';

Template.print.helpers({
  print_obj() {
    return Prints.findOne({});
  }
});