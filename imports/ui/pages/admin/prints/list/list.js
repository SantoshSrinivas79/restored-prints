import './list.html';
import './list.scss';

import { Prints } from '../../../../../collections/prints/model';
import { Publications } from '../../../../../collections/publications/model';
import '../../../../components/breadcrumb/breadcrumb';

var formatTimestamp = function(value) {
  return moment.unix(value).format('HH:mm - Do MMMM YYYY');
};

var getPublicationTitle = function(publicationId) {
  return Publications.findOne({_id: publicationId}).title;
};
//
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
        {label: 'Published', tmpl: Template.admin_prints_list_published},
        {key: 'ref', label: 'Ref'},
        {key: 'title', label: 'Title'},
        {key: 'image', label: 'Image', tmpl: Template.admin_prints_list_image, sortable: false},
        {key: 'publication', label: 'Publication', fn: getPublicationTitle},
        {key: 'date_added', label: 'Added', sortOrder: 0, sortDirection: 'descending', fn: formatTimestamp},
        {label: 'Actions', tmpl: Template.admin_list_row_actions, sortable: false},
      ]
    };
  }
});


Template.admin_prints_list_published.onCreated(function() {
  console.log("reactive var set on " + this.data._id);
  this.checked = new ReactiveVar(this.data.is_enabled);
});

Template.admin_prints_list_published.events({
  'click .checkbox'(event, template) {
    event.preventDefault();

    console.log(Template.instance());
    console.log(template);

    Template.instance().checked.set( !Template.instance().checked.get() );

    Meteor.call('prints.toggle-publish', this._id, !this.is_enabled);
  }
});

Template.admin_prints_list_published.helpers({
  is_published() {
    return Template.instance().checked.get() ? "checked" : "";
  }
});