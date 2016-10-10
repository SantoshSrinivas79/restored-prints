import Artists from '../artists/model'
import Publications from '../publications/model'
import Categories from '../categories/model';

const PriceSchema = new SimpleSchema({
  mmx: {
    type: Number,
    label: 'X (mm)'
  },
  mmy: {
    type: Number,
    label: 'Y (mm)'
  },
  price: {
    type: Number,
    label: 'Price'
  }
});

export default PrintSchema = new SimpleSchema({
  _id: {
    type: String,
    label: "Ref",
    max: 50
  },
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  latin_title_historic: {
    type: String,
    label: "Historic Latin Title",
    max: 200
  },
  latin_title_modern: {
    type: String,
    label: "Modern Latin Title",
    max: 200
  },
  publication: {
    type: Object,
    autoform: {
      type: "select",
      options: function() {
        return Publications.find().map(function(a) {
          return {label: a.title, value: a._id}
        })
      }
    }
  },
  lithograph_by: {
    type: [Object],
    label: "Lithograph Artists",
    autoform: {
      options: function() {
        return Artists.find().map(function(a) {
          return {label: a.name, value: a._id}
        })
      }
    },
    optional: true
  },
  painting_by: {
    type: [String],
    label: "Painting Artists",
    autoform: {
      options: function() {
        return Artists.find().map(function(a) {
          return {label: a.name, value: a._id}
        })
      }
    },
    optional: true
  },
  categories: {
    type: [String],
    label: "Tags",
    autoform: {
      options: function() {
        return Categories.find().map(function(a) {
          return {label: a.title, value: a.title}
        })
      }
    },
    optional: true
  },
  description: {
    type: String,
    label: "Description",
    autoform: {
      type: "textarea"
    },
    optional: true,
    max: 1000
  },
  prices: {
    type: [PriceSchema],
    label: "Prices",
    minCount: 1
  },
  image_url: {
    type: String,
    label: "Image",
    regEx: SimpleSchema.RegEx.Url
  },
  date_added: {
    type: Number,
    defaultValue: moment().unix()
  },
  is_enabled: {
    type: Boolean,
    defaultValue: true
  }
});
