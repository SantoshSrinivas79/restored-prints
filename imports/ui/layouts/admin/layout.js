import './layout.html';
import './layout.scss';
import '../../../ui/components/navbar/navbar';
import FlowRouter from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

Template.admin_layout.onRendered(function() {
  this.autorun(() => {
    $('#admin_layout_navigation').collapsible();
  });
});

Template.admin_layout.events({
  'click #logout'() {
    Meteor.logout(function() {
      FlowRouter.go('/admin');
    })
  }
});

AutoForm.setDefaultTemplate('materialize');
AutoForm.addHooks(null, {
  onSuccess: function() {
    FlowRouter.go(FlowRouter.current().route.group.prefix + '/');
  }
});