import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Todos = new Meteor.Collection('Todos');

Template.todos.helpers({
    'todo': function(){
        return Todos.find();
    }
});

Template.addTodo.events({

    'submit form': function(event){
    event.preventDefault();
    var todoName = $('[name="todoName"]').val();
    Todos.insert({
        name: todoName,
        completed: false,
        createdAt: new Date()
    });
    $('[name="todoName"]').val('');
    },
    'click .delete-todo': function(event){
        debugger;
        event.preventDefault();
    var documentId = this._id;
    var confirm = window.confirm("Delete this task?");
    if(confirm){
        Todos.remove({ _id: documentId });
    }
}
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

Template.register.events({
    'submit form': function(){
        // code goes here
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        Accounts.createUser({
            email: email,
            password: password
        });
    }
});
