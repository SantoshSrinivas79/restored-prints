import {Prints} from '../imports/models/prints';

import '../imports/pages/layout';
import '../imports/pages/home/home';
import '../imports/pages/search/search';
import '../imports/pages/print/print';
import '../imports/pages/404/404';
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

Router.route('/print/:_id', function () {
  this.render('print', {
    data: function () {
      return Prints.findOne({id: this.params._id})
    }
  });
});

Router.route('/404', function () {
  this.render('404');
});