define(function(){

    return {
        'string': function(str) {
    	    return (undefined != str) ? String(str) : '';
        },
        'number': function(n) {
          return Number(n) || 0;
        },
        'normalize': function(source) {
          return (source && ('object' == typeof source)) ? source : {};
        },
        'boolean': function(fl) {
          return Boolean(fl) || false;
        }

    };
});
