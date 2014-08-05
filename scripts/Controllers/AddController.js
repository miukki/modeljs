define(['Views/AddView', 'Models/Task'], function(AddView, Task){

  function start(){
    AddView.render();
    bindEvents();
  }

	function bindEvents(){
        document.getElementById('button').addEventListener('click', function(){
            var users = JSON.parse(localStorage.users || '[]');
            var userName = document.getElementById('user-name').value;
            users.push(new Task(userName));
		    localStorage.setItem('users', JSON.stringify(users));
            //localStorage.users = JSON.stringify(users);
            require(['Controllers/ListController'], function(ListController){
                ListController.start();
            });
        }, false);
    }

    return {
        start:start
    };
});
