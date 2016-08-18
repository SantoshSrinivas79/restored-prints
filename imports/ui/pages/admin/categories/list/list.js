import './list.html';
import Categories from '../../../../../collections/categories/model';

Template.admin_categories_list.onRendered(function() {
  var self = this;
  self.autorun(() => {
    self.subscribe('categories');
  });
});

Template.admin_categories_list.helpers({
  settings: function () {
    return {
      id: 'categories_list',
      class: 'bordered highlight',
      collection: Categories.find({}),
      rowsPerPage: 999999,
      multiColumnSort: true,
      showFilter: false,
      showNavigation: 'never',
      fields: [
        {key: 'title', label: 'Title'},
        {key: 'type', label: 'Type'},
        {label: 'Actions', tmpl: Template.admin_create_list_row_actions, sortable: false},
      ]
    };
  }
});