import './list.html';
import './list.scss';

import { Prints } from '../../../../../collections/prints/model';
import '../../../../components/breadcrumb/breadcrumb';

var formatTimestamp = function(value) {
  return moment.unix(value).format('HH:mm - Do MMMM YYYY');
};

// Template.admin_prints_list_published.events({
//   'click #is_published'(event) {
//     console.log(event);
//   }
// });

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
        {key: 'ref', label: 'Ref'},
        {key: 'title', label: 'Title'},
        {key: 'image', label: 'Image', tmpl: Template.admin_prints_list_image, sortable: false},
        {key: 'publication.title', label: 'Publication'},
        {key: 'date_added', label: 'Added', sortOrder: 0, sortDirection: 'descending', fn: formatTimestamp},
        {label: 'Actions', tmpl: Template.admin_list_row_actions, sortable: false},
      ]
    };
  }
});


Template.admin_prints_list_published.onCreated(function() {
  this.checked = new ReactiveVar(this.data.is_enabled);
});

Template.admin_prints_list_published.events({
  'click .checkbox'(event, template) {
    // event.preventDefault();

    console.log(event);

    console.log(Template.instance().data._id);
    console.log(template.data._id);

    // Template.instance().checked.set( !Template.instance().checked.get() );

    // Meteor.call('prints.toggle-publish', this._id, !this.is_enabled);
  }
});

Template.admin_prints_list_published.helpers({
  is_published() {
    return Template.instance().checked.get() ? "checked" : "";
  }
});