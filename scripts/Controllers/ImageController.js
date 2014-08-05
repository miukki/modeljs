define(['Views/ListView'], function(ListView){

    function start(){
        var images = JSON.parse(localStorage.images || '[]');
        ListView.render({images: images});
    }

    return {
        start: start
    };
});
