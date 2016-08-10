import { Template } from 'meteor/templating';
import { Prints } from '../../../collections/prints/model';
import { Publications } from '../../../collections/publications/model';

import './print.html';

Template.print.helpers({
  print() {
    return Prints.findOne({});
  }
});

Template.print_publication.helpers({
  publication_obj() {
    var print = Prints.findOne({});
    return Publications.findOne({_id: print.publication});
  }
});