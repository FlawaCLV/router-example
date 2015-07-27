//Schema
/*
Users
    _id
    email
    password
    createdAt
    updatedAt
    //Note the user document will have different forms depending on how the user
    //authenticated. e.g. Google, Facebook etc.
*/
Users.before.insert(function (userId, doc){
  doc.createdAt = new Date;
  doc.updatedAt = doc.createdAt;
});
Users.before.update(function (userId, doc, fieldNames, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.updatedAt = new Date;
});

//Helpers and index examples below
Users.helpers({
  // author: function() {
  //   return Authors.findOne(this._id);
  // }
});

if(Meteor.isServer){
  //Users._ensureIndex({story_id:1, user_id:1}, {unique: 1});
}