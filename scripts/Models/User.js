define(['Models/Utils', 'Models/Avatar'], function(Utils, Avatar){

    function User(source){
      source = Utils.normalize(source); // all time object because we normalize data-source
      this.name = Utils.string(source.name) || 'noname';
      this.avatar = new Avatar(source.avatar)
    }

    return User;
});
