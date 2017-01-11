import './list.html';
import Artists from '../../../../../collections/artists/model';

Template.admin_artists_list.onRendered(function() {
  const self = this;
  self.autorun(() => {
    self.subscribe('artists');
  });
});

Template.admin_artists_list.helpers({
  settings: function () {
    return {
      id: 'categories_list',
      class: 'bordered highlight',
      collection: Artists.find({}),
      rowsPerPage: 999999,
      multiColumnSort: true,
      showFilter: false,
      showNavigation: 'never',
      fields: [
        {key: 'title', label: 'Title'},
        {label: 'Actions', tmpl: Template.admin_artists_list_row_actions, sortable: false},
      ]
    };
  }
});