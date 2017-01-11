import './edit.html';
import Publications from '../../../../../collections/publications/model';

Template.admin_publications_edit.onRendered(function() {
  const self = this;
  self.autorun(() => {
    self.subscribe('publication_by_id', FlowRouter.getParam("id"));

    $('select').material_select();
  });
});

Template.admin_publications_edit.helpers({
  publication() {
    return Publications.findOne({});
  }
});