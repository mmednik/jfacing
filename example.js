/*
 * Implementation of jFacing library for Example case
 * Copyright 2013 Bl Labs | @mmednik
 *
 */

(function ($) {
    
    $.fn.jFacingExample = function(facing) {

        switch(facing) {

            case "3":
                this.jFacing(3, true, {
                    left: -0.5,
                    top: 0.05,
                    zIndex: 90,
                    resize: 0.9,
                    brightness: 10
                }, {
                    left: 0.6,
                    top: 0.05,
                    zIndex: 90,
                    resize: 0.9,
                    brightness: 10
                });
                break;

            case "5":
                this.jFacing(5, true, {
                    left: -0.4,
                    top: 0.1,
                    zIndex: 90,
                    resize: 0.8,
                    brightness: 20
                }, {
                    left: 0.6,
                    top: 0.1,
                    zIndex: 90,
                    resize: 0.8,
                    brightness: 20
                }, {
                    left: -1.0,
                    top: 0.05,
                    zIndex: 90,
                    resize: 0.9,
                    brightness: 10
                } , {
                    left: 1.1,
                    top: 0.05,
                    zIndex: 90,
                    resize: 0.9,
                    brightness: 10
                });
                break;

            case "7":
                this.jFacing(7, true, {
                    left: -1.3,
                    top: 0.1,
                    zIndex: 90,
                    resize: 0.8,
                    brightness: 20
                }, {
                    left: 1.5,
                    top: 0.1,
                    zIndex: 90,
                    resize: 0.8,
                    brightness: 20
                }, {
                    left: -0.5,
                    top: 0.1,
                    zIndex: 90,
                    resize: 0.8,
                    brightness: 20
                }, {
                    left: 0.7,
                    top: 0.1,
                    zIndex: 90,
                    resize: 0.8,
                    brightness: 20
                }, {
                    left: -1.0,
                    top: 0.05,
                    zIndex: 90,
                    resize: 0.9,
                    brightness: 10
                } , {
                    left: 1.1,
                    top: 0.05,
                    zIndex: 90,
                    resize: 0.9,
                    brightness: 10
                });
                break;

            case "1":
            default:
                // sin facing
                this.css('left', this.children('.facing-original').width()/-(2) + 'px');
        }
    }

}(jQuery));
