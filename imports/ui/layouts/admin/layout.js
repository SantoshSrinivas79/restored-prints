import './layout.html';
import './layout.scss';
import '../../../ui/components/navbar/navbar';

Template.admin_layout.onRendered(function() {
  this.autorun(() => {
    $('#admin_layout_navigation').collapsible();
  });
});