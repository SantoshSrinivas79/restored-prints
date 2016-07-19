import './search_bar.html';

Template.search_bar.events({
  'submit .search'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.query.value;

    FlowRouter.go('/search/' + text);
  }
});