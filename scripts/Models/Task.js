define(function(){

    function Task(source){
		  source = (source && ('string' == typeof source)) ? source : '';
      this.name = source || 'Default task';
    }

    return Task;
});
