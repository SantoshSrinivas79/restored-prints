import './create.html';

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