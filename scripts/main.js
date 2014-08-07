requirejs.config({
//enforceDefine: true,
});


require(['Controllers/ListController', 'Controllers/addController', 'Controllers/ImageController', 'Models/User', 'Models/Avatar'], function(ListController, addController, ImageController, User, Avatar){

  console.log(new User({'name': 'natali', avatar: {'src': 'blablabla'}}))
  console.log(new Avatar({'src': '/src/img.jpg'}))
  ListController.start();
  //ImageController.start()
  addController.start();

}, function(err) {
});
