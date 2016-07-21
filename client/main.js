import '../imports/startup/client/main/index';
import '../imports/startup/client/admin/index';

Template.registerHelper("isReady", function (sub) {
  if(sub) {
    return FlowRouter.subsReady(sub);
  } else {
    return FlowRouter.subsReady();
  }
});