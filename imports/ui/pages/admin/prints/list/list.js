import './list.html';
import './list.scss';
import { Meteor } from 'meteor/meteor'

import Prints from '../../../../../collections/prints/model';
import '../../../../components/breadcrumb/breadcrumb';

function formatTimestamp(value) {
  return moment.unix(value).format('HH:mm - Do MMMM YYYY');
}

Template.admin_prints_list.onRendered(function() {
  const self = this;
  self.autorun(() => {
    self.subscribe('prints_admin');
    self.subscribe('publications');
  });
});

Template.admin_prints_list.helpers({
  settings: function() {
    return {
      id: 'prints_list',
      class: 'bordered highlight',
      collection: Prints.find({}),
      rowsPerPage: 999999,
      multiColumnSort: true,
      showFilter: false,
      showNavigation: 'never',
      fields: [
        {key: 'is_enabled', label: 'Published', tmpl: Template.admin_prints_list_published},
        {key: '_id', label: 'Ref'},
        {key: 'title', label: 'Title'},
        {key: 'image', label: 'Image', tmpl: Template.admin_prints_list_image, sortable: false},
        {key: 'publication.title', label: 'Publication'},
        {key: 'date_added', label: 'Added', sortOrder: 0, sortDirection: 'descending', fn: formatTimestamp},
        {label: 'Actions', tmpl: Template.admin_list_row_actions, sortable: false},
      ]
    };
  }
});

Template.admin_prints_list_published.events({
  'click .checkbox'(event, template) {
    Meteor.call('prints.toggle-publish', template.data._id, event.target.checked)
  }
});

Template.admin_prints_list_published.helpers({
  is_published() {
    return this.is_enabled ? "checked" : "";
  }
});