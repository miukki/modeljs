requirejs.config({
//enforceDefine: true,
});


require(['Controllers/ListController', 'Controllers/addController', 'Controllers/ImageController'], function(ListController, addController, ImageController){

  ListController.start();
  ImageController.start()
  addController.start();

}, function(err) {
});
