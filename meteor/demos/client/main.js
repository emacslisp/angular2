import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  test() {
    var d = new Date();
    return d.getDate();
  },

  currentTime: function() {
    return Session.get('now');
  },

  comments: function() {
     return [
        {title: 'Some comment', author:'Jane'},
        {title: 'Another one', author: 'Ted'}
     ];
  }

});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.messageDisplay.helpers({
    sessionMessage: function () {
       return Session.get('message');
    }
});

Template.messageDisplay.events({
    'click .nice': function() {
        console.log('click .nice');
        Session.set('message','Hello!');
   },
    'click .cute': function() {
        console.log('click .cute');        
        Session.set('message','I love you.');
   }
});


Meteor.setInterval(function() {
   var currentDate = new Date();
   Session.set('now',currentDate.toLocaleTimeString());
},1000);

Books = new Meteor.Collection('books');

if(Meteor.isClient) {
    Template.books.helpers({

       books: function () {
           console.log('books');

           return Books.find();
    }
    });
}
