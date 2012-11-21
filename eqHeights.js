/**
 * Tabs jQuery plugin
 * https://github.com/pkrstic/eqHeights
 *
 * Copyright 2012, Predrag Krstic
 * Licensed under the MIT license.
 * see LICENSE.txt
 *
 * @author Predrag Krstic
 * @verson 1.0
 */
(function($){
$.fn.extend({ 
	eqHeights: function() {

		var maxH = 0;
	
		this.each(function() {
			var h = $(this).height();
			if (h > maxH) maxH = h;
		});

		return $(this).height(maxH);
	}
});
})(jQuery);