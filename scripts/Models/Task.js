define(['Models/Utils'], function(Utils){

    function Task(source){
        source = Utils.object(source); // normalize obj - data-source
        this.name = Utils.string(source.name) || 'noname';
        //try Utils.number(source.name)
    }

    return Task;
});
