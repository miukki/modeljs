define(function(){
    function renderUsers(data, param) {
        var appDiv = document.getElementById('list' + param);
        var html = '<div class="btn-group-vertical col-md-6">';

        for (var i = 0, len = data.length; i < len; i++){
            if (param == 'Task') html += '<button type="button" class="btn btn-default">' + data[i].name + '</button>';
            if (param == 'Images') html += '<img src="' + data[i].image + '"/>';
        }
        html += '</div>';
        appDiv.innerHTML = html;
    };

    function render(parameters){
      if (parameters.task) renderUsers(parameters.task, 'Task');
      if (parameters.images) renderUsers(parameters.images, 'Images');
    }

    return {
        render: render
    };
});
