import { Meteor } from 'meteor/meteor';
import { Prints } from '../imports/models/prints';
import { Publications } from '../imports/models/publications';

Meteor.startup(() => {
  Prints.insert({
    id: "JGD022",
    title:  "Kingfisher",
    latin_title_historic: "Alcedo isipda, Linn.",
    latin_title_modern: "Alcedo atthis",
    publication: "#birds-of-europe",
    lithograph_by: ["John Gould", "Elizabeth Gould"],
    painting_by: ["John Gould", "Elizabeth Gould"],
    prices: [
      {
        title: "A3+",
        inches: "19x13",
        mms: "483x330",
        price: 45.00
      }
    ]
  });

  Publications.insert({
    id: "#birds-of-europe",
    title: "The Birds of Europe",
    author: ["John Gould"],
    first_published: 1817,
    last_published: 1837
  });


  // code to run on server at startup
});
