import './login.html';

Template.admin_login.events({
  'submit #login'(event) {
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const username = target.username.value;
    const password = target.password.value;

    console.log(username);
    console.log(password);

    var result = Meteor.call('auth.login', username, password);

    console.log(this.userId);
  }
});