define(['Views/FormView', 'Models/Task', 'Models/Image'], function( FormView, Task, Image){

  function start(){
    FormView.render();
    bindEvents();
  }

	function bindEvents(){

        document.getElementById('add').addEventListener('click', function(){
            var tasks = JSON.parse(localStorage.tasks || '[]');
            var userName = document.getElementById('user-name').value;
            tasks.push(new Task(userName));
		        localStorage.setItem('tasks', JSON.stringify(tasks));
            require(['Controllers/ListController'], function(ListController){
                ListController.start({'task': true});
            });
        }, false);

        document.getElementById('clear').addEventListener('click', function(){
		        localStorage.setItem('tasks', JSON.stringify([]));
            require(['Controllers/ListController'], function(ListController){
                ListController.start({'task': true});
            });
        }, false);

        document.getElementById('addImage').addEventListener('click', function(){
            var images = JSON.parse(localStorage.images || '[]');
            var dataUri = document.getElementById('imageDataUri').value;
            var img = new Image(dataUri);
            console.log('img', img);
            images.push(img);
		        localStorage.setItem('images', JSON.stringify(images));
            require(['Controllers/ImageController'], function(ImageController){
                ImageController.start({'images': true});
            });
        }, false);


    }

    return {
        start:start
    };
});
