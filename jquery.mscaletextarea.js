/*
 * jQuery mScaleTextarea v.1
 *
 * Copyright 2018, Dario Montalbano
 * 
 * 
 */

(function($) {

  $.mScaleTextarea = {
    options: {
      resizeInt: null
    }
  };

  function txtHandler(event) {

        var handleObj = event.handleObj;
        var origHandler = handleObj.handler;

		$(this).on("mouseup", function(e) {
				if ($.mScaleTextarea.options.resizeInt !== null) {
						clearInterval($.mScaleTextarea.options.resizeInt);
				}
		});

		$(this).on("mousedown", function(e) {
			$.mScaleTextarea.options.resizeInt = setInterval(function(){
				return origHandler.apply(event.target, arguments);
			}, 1000/15);
		});
		
  }
	
	$.event.special.mScaleTextarea = {
			bindType: "mousedown",
			delegateType: "mousedown",
            handle: function( event ) {
                txtHandler(event);
            }
	};

})(jQuery || this.jQuery || window.jQuery);
