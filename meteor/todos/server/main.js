import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
    Todos = new Mongo.Collection('Todos');
});
