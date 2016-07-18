import { Prints } from '../imports/models/prints';

import '../imports/pages/layout';
import '../imports/pages/home/home';
import '../imports/pages/search/search';
import '../imports/pages/print/print';
import './styles/main.less';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/search', function () {
  this.render('search');
});

Router.route('/print/:id', function () {
  this.render('print', {
    data: function() {
      return Prints.find({id: this.id});
    }
  });
});