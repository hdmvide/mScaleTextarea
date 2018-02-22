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

  function txtHandler(handleObj) {
		
		var origHandler = handleObj.handler;
		
		$(this).on("mouseup", function(e) {
				if ($.mScaleTextarea.options.resizeInt !== null) {
						clearInterval($.mScaleTextarea.options.resizeInt);
				}
		});

		handleObj.handler = function(event) {
			$.mScaleTextarea.options.resizeInt = setInterval(function(){
				return origHandler.apply(event.target, arguments);
			}, 1000/15);
		}
		
  }

	$.event.special.mousedown = {
		add: txtHandler
	};
	
	$.event.special.mScaleTextarea = {
			bindType: "mousedown",
			delegateType: "mousedown"
	};

})(jQuery || this.jQuery || window.jQuery);
