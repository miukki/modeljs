define(['Models/Utils', 'Models/Avatar', 'Models/Author'], function(Utils, Avatar, Author){

  //function method() {} //

    function User(source){
      source = Utils.object(source); // all time object because we normalize data-source
      this.name = Utils.string(source.name) || 'noname';
      this.avatar = new Avatar(source.avatar)
      //this.pass = // - i can also write simple function [method] for check - 'is it password not exipred, for example'?

      //also we can have dependencies beetwen few models.
      this.banForum = (new Author(source.forumData)).banForum;
      this.author = new Author(source.forumData);
    }

    return User;
});
