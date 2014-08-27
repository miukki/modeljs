define(['Models/Utils'], function(Utils){

    function Author(source){
        source = Utils.object(source); // normalize obj - data-source
        this.banForum = Utils.boolean(source.isBan);
        this.votes = Utils.string(source.votes)
    }

    return Author;
});
