/*
 *	Plugin name: eqHeights
 *	Author: Predrag Krstic
 *	License: Creative Commons Attribution-ShareAlike 3.0 Unported License
 *           http://creativecommons.org/licenses/by-sa/3.0/
 *	Copyright (c) 2010
 *	Version: 1.0
 */
(function($){
$.fn.extend({ 
	eqHeights: function() {

		var maxH = 0;
	
		this.each(function() {
			var h = $(this).height();
			if (h > maxH) maxH = h;
		});
		return this.each(function() {
			$(this).height(maxH);
		});
	}
});
})(jQuery);