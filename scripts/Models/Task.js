define(['Models/Utils'], function(Utils){

    function Task(source){
        source = Utils.normalize(source); // all time object because we normalize data-source
        this.name = Utils.boolean(source.name);
        //try Utils.number(source.name)
    }

    return Task;
});
