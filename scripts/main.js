requirejs.config({
//enforceDefine: true,
});

require(['Controllers/ListController', 'Controllers/addController', 'Controllers/ImageController', 'Models/User', 'Models/Avatar', 'Models/Task'], function(ListController, addController, ImageController, User, Avatar,Task){

  console.log(new User({'name': 'natali', avatar: {'src': ''}, forumData: {isBan: true}}))
  console.log(new Avatar({'src': '/src/img.jpg'}))
  console.log(new Task({'name': 'str'}))
  ListController.start();
  addController.start();

}, function(err) {
});
