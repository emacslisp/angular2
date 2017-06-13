//Router.configure();

// Router.route('/test',{
//     template: 'messageDisplay'
// });

// Router.route('/',function() {
//     this.render('messageDisplay');
// });
Router.route('/');

Router.route('/hello',{
    template:'messageDisplay'
});


Router.route('/hello1', function(){
    this.render('messageDisplay');
});
