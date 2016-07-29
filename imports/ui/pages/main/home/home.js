import "./home.html";
import { Prints } from '../../../../collections/prints/model';

Template.home.helpers({
  latest_print() {
    return Prints.findOne({});
  },
  three_next_latest_prints() {
    return Prints.find({}, {skip: 1, limit: 3})
  }
});