1. ALL types:
  SImple types: Number, Boolean, String, null, undefined
  Objective Types: Array, Function, Date, String / Why srting ? cause 'string'.length make a sense

2. Special values:
  1/0 = Number.POSITIVE_INFINITY  // Number.POSITIVE_INFINITY > @some_number | EXAMPLE:  1/0 > 2; OR -1/0 < -2
  -1/0 = Number.NEGATIVE_INFINITY
  Number(“something”) = NaN (error result)

3. NAN very special symbol, you need to know :
 NaN + 1 = NaN
 NaN == NaN // false always. NOTE: NaN is never equal to itself!
 isNaN(NaN), isNaN('some_string') // true


4. Let's take a look my small app in MVC. Why we need models ?

  Let's take a look my models:

  4.1. !!!Simple  My-abstract-object
    var task = new Task() :

      function Task(source){
          source = Utils.object(source); // Utils.object - normalize-object-source
          this.name = Utils.string(source.name) || 'noname';
          //try Utils.number(source.name)
      }

  4.2. !!!Complex My-abstract-object
    var user = new User();

      function User(source){
        source = Utils.object(source); // all time object because we normalize data-source
        this.name = Utils.string(source.name) || 'noname';
        this.avatar = new Avatar(source.avatar)
        //this.pass = // - i can also write simple function [method] for check - 'is it password not exipred, for example'?

        //also we can have dependencies beetwen few models.
        this.banForum = (new Author(source.forumData)).banForum;
      }

5. model.js Complex-models for data.


6. Why we need models:
  - avoid errors in tmpl
  - ..etc
