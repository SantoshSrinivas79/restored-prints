import './edit.html';
import Categories from '../../../../../collections/categories/model';

Template.admin_categories_edit.onRendered(function() {
  const self = this;
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

