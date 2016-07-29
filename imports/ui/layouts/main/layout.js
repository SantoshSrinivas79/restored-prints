import "./layout.html"
import "../../components/navbar/navbar";
import "../../components/preloader/preloader";

Template.registerHelper("isReady", function (sub) {
  if(sub) {
    return FlowRouter.subsReady(sub);
  } else {
    return FlowRouter.subsReady();
  }
});

Template.registerHelper('truncate', function(stringToShorten, maxCharsAmount){
  if(stringToShorten.length > maxCharsAmount){
    return stringToShorten.substring(0, maxCharsAmount) + '...';
  }
  return stringToShorten;
});

Template.search_bar.events({
  'submit #search'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.query.value;

    FlowRouter.go('/search/' + text);
  }
});