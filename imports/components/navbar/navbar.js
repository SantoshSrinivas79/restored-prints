import './navbar.html';

Template.navbar.onRendered(function() {
  this.autorun(() => {
    $(".dropdown-button").dropdown();
  });
});