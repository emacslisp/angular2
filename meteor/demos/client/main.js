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
  }

});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Meteor.setInterval(function() {
   var currentDate = new Date();
   Session.set('now',currentDate.toLocaleTimeString());
},1000);
