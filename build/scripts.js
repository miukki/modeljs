require(['Models/User', 'Controllers/ListController', 'Controllers/addController'], function(User, ListController, addController){

    var users = [new User('Barney'),
                 new User('Cartman'),
                 new User('Sheldon')];

    for (var i = 0, len = users.length; i < len; i++){
        console.log(users[i].name);
    }


    localStorage.users = JSON.stringify(users);

	ListController.start();
	addController.start();
});
;define(['Views/AddView', 'Models/User'], function(AddView, User){

    function start(){
        AddView.render();
		bindEvents();
    }

	function bindEvents(){
        document.getElementById('button').addEventListener('click', function(){
            var users = JSON.parse(localStorage.users);
            var userName = document.getElementById('user-name').value;
            users.push(new User(userName));
            localStorage.users = JSON.stringify(users);
            require(['Controllers/ListController'], function(ListController){
                ListController.start();
            });
        }, false);
    }

    return {
        start:start
    };
});
;define(['Views/ListView'], function(ListView){

    function start(){
        var users = JSON.parse(localStorage.users);
        ListView.render({users:users});
    }

    return {
        start: start
    };
});
;define(function(){

    function User(name){
        this.name = name || 'Default name';
    }

    return User;
});
;define(function(){

    function render(parameters){
        var appDiv = document.getElementById('add');
        appDiv.innerHTML = '<div class="form-group"><input id="user-name" class="form-control" placeholder="add to list.." /></div><div class="form-group ml-sm"><button class="btn btn-default" id="button">add</button></div>';
    }

    return {
        render: render
    };
});
;define(function(){
    function render(parameters){
        var appDiv = document.getElementById('list');
        var users = parameters.users;
        var html = '<div class="p-md btn-group-vertical pt-0">';

        for (var i = 0, len = users.length; i < len; i++){
            html += '<div class="btn-group"><button class="btn btn-default">' + users[i].name + '</button></div>';
        }
        html += '</div>';
        appDiv.innerHTML = html;
    }

    return {
        render: render
    };
});
