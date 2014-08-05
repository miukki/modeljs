define(function(){

    function render(){
        var appDiv = document.getElementById('form');
        appDiv.innerHTML = '<div class="form-group"><input id="user-name" class="form-control" placeholder="add to list.." /></div><div class="form-group ml-sm"><button class="btn btn-default" id="add">add</button></div><button class="btn btn-default ml-sm" id="clear">clear</button></div>';
    };

    return {
        render: render
    };
});
