define(['Views/FormView', 'Models/Task'], function( FormView, Task){

  function start(){
    FormView.render();
    bindEvents();
  }

	function bindEvents(){

        document.getElementById('add').addEventListener('click', function(){
            var tasks = JSON.parse(localStorage.tasks || '[]');
            var userName = document.getElementById('user-name').value;
            tasks.push(new Task({'name': userName}));
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
    }

    return {
        start:start
    };
});
