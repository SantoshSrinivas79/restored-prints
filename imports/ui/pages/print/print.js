import { Template } from 'meteor/templating';
import Prints from '../../../collections/prints/model';

import './print.html';

Template.print.onCreated(function() {
  var self = this;
  self.autorun(() => {
    self.subscribe('print_by_id', FlowRouter.getParam('id'));
  })
});

Template.print.helpers({
  print() {
    return Prints.findOne({});
  }
});