import './login.html';

Template.admin_login.events({
  'submit #login'(event) {
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const username = target.username.value;
    const password = target.password.value;

    Meteor.loginWithPassword(username, password, function(err) {
      if(err) {
        console.log(err);
      } else {
        FlowRouter.go("/admin/prints/");
      }
    });
  }
});