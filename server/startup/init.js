Meteor.startup(function () {
  if(Meteor.users.find().count() === 0){
    //Do some seeding
  }
});