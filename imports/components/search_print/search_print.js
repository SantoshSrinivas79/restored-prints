import './search_print.html';

Template.search_print.helpers({
  path() {
    var result = this;
    return FlowRouter.path('print', {id: result.id});
  },
  price_from() {
    if(this.prices.length === 1) {
      return this.prices[0].price;
    } else {
      return "From " + Math.min.apply(Math, this.prices.map(function(price){return price.price;}))
    }

  },
  truncate(string, length) {
    return string.substring(0, length) + '...';
  }
});