import Constants from '../../common/constants';

export default CategorySchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  type: {
    type: String,
    label: "Type",
    allowedValues: _.map(Constants.CATEGORIES, function(val) {
      return val;
    })
  }
})