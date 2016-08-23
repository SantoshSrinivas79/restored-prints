import './list.html';
import Publications from '../../../../../collections/publications/model';

Template.admin_publications_list.onRendered(function() {
  var self = this;
  self.autorun(() => {
    self.subscribe('publications');
  });
});

Template.admin_publications_list.helpers({
  settings: function () {
    return {
      id: 'categories_list',
      class: 'bordered highlight',
      collection: Publications.find({}),
      rowsPerPage: 0,
      multiColumnSort: true,
      showFilter: false,
      showNavigation: 'never',
      fields: [
        {key: 'title', label: 'Title'},
        {key: 'authors', label: 'Authors'},
        {key: 'first_published', label: 'First Published'},
        {key: 'last_published', label: 'Last Published'},
        {label: 'Actions', tmpl: Template.admin_create_list_row_actions, sortable: false},
      ]
    };
  }
});