import './edit.html';
import Artists from '../../../../../collections/artists/model';

Template.admin_artists_edit.onRendered(function() {
  const self = this;
  self.autorun(() => {
    self.subscribe('artist_by_id', FlowRouter.getParam("id"));

    $('select').material_select();
  });
});

Template.admin_artists_edit.helpers({
  artist() {
    return Artists.findOne({});
  }
});