requirejs.config({
//enforceDefine: true,
});


require(['Controllers/ListController', 'Controllers/addController'], function(ListController, addController){

  ListController.start();
  addController.start();

}, function(err) {
});
