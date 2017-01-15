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
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});



Template.test.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter2 = new ReactiveVar(0);
});

Template.test.helpers({
  counter2() {
    return Template.instance().counter2.get();
  },
});

Template.test.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter2.set(instance.counter2.get() + 1);
  },
});



Template.messageDisplay.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter2 = new ReactiveVar(0);
});

Template.messageDisplay.helpers({
  messageCount:function() {
    return 2;
  },
  hasMessage: function() {
    return true;
  },
  messages : function(p1,p2) {
    return ['Hello','Important Message'];
  },    
});

Template.messageDisplay.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter2.set(instance.counter2.get() + 1);
  },
});
