/*
 * jFacing | Product Facing JavaScript Library
 * Copyright 2013 Bl Labs | @mmednik
 *
 */

(function ($) {
    
    $.fn.jFacing = function(n, magic, options) {

        var _clons = [];
        var _original = this.children('.facing-original');
        var _widthMultiplier;
 
        for(var i=1; i<n; i++) {
 
            _clons[i-1] = _original.clone();
            this.append(_clons[i-1]);
            this.addClass('facing-on');
            
            switch(n){
                case 3:
                    _widthMultiplier = 2;
                    break;
                case 5:
                    _widthMultiplier = 2.98;
                    break;
                case 7:
                    _widthMultiplier = 3.6;
                    break;
            }
            
            this.parent().parent().width(_original.width()*_widthMultiplier);
            
            this.height(_original.height());
            this.css('left', _original.width()*(-0.5) + 'px'); // adjust x position
            
            var _options = arguments[1+i];

            _clons[i-1]
            .attr('class', 'clon clonned-' + i)
            .css('left', _original.width()*(_options.left) + 'px')
            .css('top', _original.height()*(_options.top) + 'px')
            .css('z-index', _options.zIndex);
 
            if(magic) {
                _clons[i-1].addClass('dark-'+_options.brightness);
                _clons[i-1].children('img')
                .width(_original.width()*(_options.resize))
                .height(_original.height()*(_options.resize));
            }
 
        }
    }

}(jQuery));
