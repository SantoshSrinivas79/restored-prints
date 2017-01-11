import "./home.html";
import Prints from '../../../collections/prints/model';
import {Template} from 'meteor/templating';
import FlowRouter from 'meteor/kadira:flow-router';

Template.home.onCreated(function() {
  const self = this;
  self.autorun(() => {
    self.subscribe('prints_home_page');
  })
});

Template.home.helpers({
  path() {
    return FlowRouter.url('print', {id: this._id});
  },
  latest_print() {
    return Prints.findOne({});
  },
  three_next_latest_prints() {
    return Prints.find({}, {skip: 1, limit: 3})
  }
});