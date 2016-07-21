import './create.html';

import { Publications } from '../../../../../collections/publications/model';
import { Artists } from '../../../../../collections/artists/model';

Template.admin_prints_create_form.onRendered(function() {
  this.autorun(() => {
    $('select').material_select();
  });
});

Template.admin_prints_create_form.helpers({
  publications() {
    return Publications.find({});
  },
  artists() {
    return Artists.find({});
  }
});

Template.admin_prints_create.events({
  'submit #admin_prints_create'(event) {
    event.preventDefault();

    var printObj = $('#admin_prints_create').serializeArray();

    var formData = {};
    $.map(printObj, function(val) {
      formData[val['name']] = val['value'];
    });

    console.log(formData);

    // var printObj = {
    //   ref: print.ref,
    //   title:  print.title,
    //   latin_title_historic: print.latin_title_historic,
    //   latin_title_modern: print.latin_title_modern,
    //   publication: print.publication,
    //   lithograph_by: print.lithograph_by,
    //   painting_by: print.painting_by,
    //   description: print.description,
    //   prices: print.prices,
    //   tags: print.tags
    // };

    Meteor.call('prints.insert', formData);
  }
});

var priceArray = new ReactiveArray([{}]);

Template.admin_prints_create_prices.events({
  'click a.add_price'(event, template) {
    event.preventDefault();

    priceArray.push({});

    // Template.instance().checked.set( !Template.instance().checked.get() );

    // Meteor.call('prints.toggle-publish', this._id, !this.is_enabled);
  },
  'click .material-icons'(event) {
    priceArray.remove(this);
  }
});

Template.admin_prints_create_prices.helpers({
  price_rows() {
    return priceArray.list();
  }
});