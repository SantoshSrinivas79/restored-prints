import './edit.html';
import Categories from '../../../../../collections/categories/model';

Template.admin_categories_edit.onRendered(function() {
  var self = this;
  self.autorun(() => {
    self.subscribe('category_by_id', FlowRouter.getParam("id"));

    $('select').material_select();
  });
});

Template.admin_categories_edit.helpers({
  category() {
    return Categories.findOne({});
  }
});

