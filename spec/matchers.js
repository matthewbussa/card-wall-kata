beforeEach(function() {
  this.addMatchers({
    toBeBetween: function(before, after) {
			return this.actual >= before && this.actual <= after;
    },
    toBeBlocked: function(){
    	return this.actual.blocked;
    }
  });

});


//var inbetween = function(a, b, c) {
//    return a >= b && a <= c;
//  };

