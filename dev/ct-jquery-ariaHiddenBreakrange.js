/*
 * File name: ct-jquery-ariaHiddenBreakrange.js
 * Plugin name: ariaHiddenBreakrange
 * Project name: IE (2014)
 *
 * Summary:
 * Markup:
 * Usage:
 *
 * Plugin architecture:
 * http://docs.jquery.com/Plugins/Authoring
 * + read: http://stackoverflow.com/questions/5162120/sharing-settings-across-methods-in-namespaced-jquery-plugin
 * + read: http://extraordinarythoughts.com/2011/08/20/understanding-jquery-plugins/
 * + read: http://blog.kevinchisholm.com/javascript/javascript-immediate-functions-basics/
 * + read: http://www.learningjquery.com/2007/10/a-plugin-development-pattern
 * + read: http://jqfundamentals.com/chapter/jquery-basics
 * TO READ: http://www.virgentech.com/blog/2009/10/building-object-oriented-jquery-plugin.html
 *
*/

    // IMMEDIATE FUNCTION
    // (function($) {..}(jQuery))
    //
    // This 'immediate' function aka IIFE (Immediately Invoked Function Expression)
    // executes as soon as it is defined; it is followed by (), then wrapped in ();
    //
    // The enclosure in parenthesis makes everything inside the function run within a local scope.
    // This means that public variables like 'jQuery' are inaccessible, so we pass this in as an argument,
    // and map it to '$' (valid names in JavaScript can be pretty much anything, as long as they don't begin with a number and don't include a hyphen),
    // so it can't be overwritten by another library (such as Prototype) in the scope of its execution.
    //
    // Wrapping the entire plugin definition in a function create a closure,
    // allowing us to define private functions, without cluttering the namespace and without exposing the implementation.
    // aka In JavaScript, if you use the function keyword inside another function, you are creating a closure.

    (function($) {

        // VALIDATION SETTINGS FOR JSHINT.COM
        // This file
        /*jshint browser:true, jquery:true, strict:true, devel:true */

        // Allow specified vars from other files
        /*global enquire:true */
        "use strict";

        // NAMESPACING:
        // This type of plugin architecture allows you to encapsulate all of your methods
        // in the plugin's parent closure, and call them by first passing the string name
        // of the method, and then passing any additional parameters you might need for that method.
        // This type of method encapsulation and architecture is a standard in the jQuery plugin community
        // and it used by countless plugins, including the plugins and widgets in jQueryUI.
        //
        // Define a JSON object 'methods' to store public methods.
        var methods = {

            // called with $(el).ariaHiddenBreakrange()
            init : function( options ) {

                // Dependencies
                //if ( typeof $.OTHER_ariaHiddenBreakrange === undefined ) {
                //    return;
                //}

                // Create settings, regardless of whether they were already set
                var defaults = {
                    breakranges: {
                        mobile: {
                            start: "0px",
                            end: "767px"
                        },
                        tablet: {
                            start: "768px",
                            end: "979px"
                        },
                        desktop: {
                            start: "980px",
                            end: "1255px"
                        },
                        desktop_wide: {
                            start: "1256px",
                            end: false
                        }
                    }
                };

                var settings = $.extend({}, defaults, options);

                // Requirements
                //if ( settings.PROPERTY === '' ) {
                //    return;
                //}

                // Create any dynamic properties
                // settings.OTHER_PROPERTY = 'STRING_' + settings.PROPERTY;

                // MAINTAIN CHAINABILITY by returning 'this'
                // Within the function called by 'each()', the individual element being processed
                // can be referenced in the local scope by 'this' and used as a jQuery object by '$(this)'
                return this.each( function() {

                    // Create a jQuery object to use with this individual element
                    var $this = $(this);

                    // EVENT BINDINGS
                    // Namespace bound events to ariaHiddenBreakrange
                    // so we can safely unbind plugin events without accidentally
                    // unbinding events that may have been bound outside of the plugin.
                    //$(SOME_ELEMENT).bind('EVENT_NAME.ariaHiddenBreakrange', methods.METHOD_NAME);

                    // DATA
                    // it's best to use a single object literal to house all of your variables, and access that object by a single data namespace.
                    // Attempt to grab saved settings, if they don't exist we'll get 'undefined'.
                    // Note: this is the alternative approach to define an 'options' variable with/before 'methods'
                    // so that it is available to other functions inside the closure.
                    //
                    // To set data:
                    // 1.  $context.data('ariaHiddenBreakrange').NEW_PROPERTY_NAME = 'VALUE';
                    // 2a. $context.data('ariaHiddenBreakrange').NEW_PROPERTY_SET = {};
                    // 2b. $context.data('ariaHiddenBreakrange').PROPERTY_SET.NEW_PROPERTY_NAME = 'BAR';
                    //
                    // To retrieve data:
                    // 1.  $context.data('ariaHiddenBreakrange').EXISTING_PROPERTY_NAME
                    // 2a. $context.data('ariaHiddenBreakrange').EXISTING_PROPERTY_SET;
                    // 2b. $context.data('ariaHiddenBreakrange').EXISTING_PROPERTY_SET.EXISTING_PROPERTY_NAME;

                    // store HTML5 data before the plugin overwrites it
                    var data_ariaHiddenBreakrange = $this.data('ariahiddenbreakrange');

                    // Save our newly created settings with each element
                    $this.data('ariaHiddenBreakrange', settings);

                    // store our saved HTML5 data with the new data set
                    $this.data('ariaHiddenBreakrange').keyword = data_ariaHiddenBreakrange;

                    // RUN CODE HERE
                    // set up $this
                    $this.ariaHiddenBreakrange('_setup');

                });

            },

            // Private methods

            _setup: function() {

                // the default visibility for items is visible
                // data-hidden-at allows items to be accessibly hidden in certain scenarios

                var $this = $(this), // module
                    data = $this.data('ariaHiddenBreakrange'),
                    keyword = data.keyword,
                    breakrange = false,
                    media_query = false;

                    if ( keyword === 'js' ) {
                        $this.ariaHiddenBreakrange('_hide');
                        return;
                    }
                    else {
                    // if ( // assume breakpoint
                         //( val === 'mobile' ) ||
                         //( val === 'mobile,tablet' ) ||
                         //( val === 'tablet' ) ||
                         //( val === 'mobile,tablet,desktop' ) ||
                         //( val === 'tablet,desktop' ) ||
                         //( val === 'desktop' ) ||
                         //( val === 'desktop,desktop-wide' ) ||
                         //( val === 'tablet,desktop,desktop-wide' ) ||
                         //( val === 'desktop-wide' )
                    //) {

                        breakrange = $this.ariaHiddenBreakrange('_translate', keyword);

                        if ( ! breakrange ) {
                            return;
                        }

                        if ( breakrange.start && breakrange.end ) {
                            media_query = 'screen and (min-width:';
                            media_query += $this.ariaHiddenBreakrange('_em', breakrange.start);
                            media_query += ') and (max-width:';
                            media_query += $this.ariaHiddenBreakrange('_em', breakrange.end);
                            media_query += ')';
                        }
                        else if ( breakrange.start && ! breakrange.end ) {
                            media_query = 'screen and (min-width:';
                            media_query += $this.ariaHiddenBreakrange('_em', breakrange.start);
                            media_query += ')';
                        }

                        if ( media_query ) {

                            if ( typeof enquire !== 'undefined') {

                                // Monkey patch:
                                // to allow unmatch (which usually runs on breakpoint transition) to run on DOM load as well
                                // https://github.com/WickyNilliams/enquire.js/issues/86#issuecomment-28665171
                                // in order to use the IE polyfill please use ct-jquery-polyfill.js instead
                                if ( typeof enquire.registerImmediate === 'undefined' ) {
                                  enquire.registerImmediate = function(query, options) {
                                      options.setup = options.unmatch;
                                      return this.register(query, options);
                                  };
                                }

                                enquire.registerImmediate( media_query, {

                                    // when within the breakrange
                                    match: function() {
                                        //console.log('match');
                                        $this.attr('aria-hidden', true);
                                    },

                                    // when outside the breakrange
                                    unmatch : function() {
                                        //console.log('unmatch');
                                        $this.attr('aria-hidden', false);
                                    },

                                    // OPTIONAL, defaults to false
                                    // If set to true, defers execution of the setup function
                                    // until the first time the media query is matched
                                    deferSetup : false // needs to be false for the monkey patch to work

                                    // OPTIONAL
                                    // If supplied, triggered when handler is unregistered.
                                    // Place cleanup code here
                                    //destroy : function() {}

                                }, false); // false == !shouldDegrade
                            }
                        }
                    }
                //});
            },

            _translate: function(breakrange_keyword) {

                var $this = $(this), // module
                    data = $this.data('ariaHiddenBreakrange'),
                    breakranges = data.breakranges,
                    breakrange = {
                        start: false,
                        end: false
                    };

                // map the breakrange keyword to a pixel value
                // these values are copied from _base.scss

                // multiple values can be used, comma separated
                // note that ranges must be consecutive
                // eg mobile,tablet is ok because the tablet breakrange comes after the mobile breakrange
                // eg mobile,desktop is not ok because the desktop breakrange does not come after the mobile breakrange

                // TODO: jQuery.each(breakranges, function(key,value){}

                switch ( breakrange_keyword ) {

                    case "mobile":
                        breakrange.start = breakranges.mobile.start;
                        breakrange.end = breakranges.mobile.end;
                        break;

                    case "mobile,tablet":
                        breakrange.start = breakranges.mobile.start;
                        breakrange.end = breakranges.tablet.end;
                        break;

                    case "tablet":
                        breakrange.start = breakranges.tablet.start;
                        breakrange.end = breakranges.tablet.end;
                        break;

                    case "mobile,tablet,desktop":
                        breakrange.start = breakranges.mobile.start;
                        breakrange.end = breakranges.desktop.end;
                        break;

                    case "tablet,desktop":
                        breakrange.start = breakranges.tablet.start;
                        breakrange.end = breakranges.desktop.end;
                        break;

                    case "desktop":
                        breakrange.start = breakranges.desktop.start;
                        breakrange.end = breakranges.desktop.end;
                        break;

                    case "tablet,desktop,desktop-wide":
                        breakrange.start = breakranges.tablet.start;
                        breakrange.end = breakranges.desktop_wide.end;
                        break;

                    case "desktop,desktop-wide":
                        breakrange.start = breakranges.desktop.start;
                        breakrange.end = breakranges.desktop.wide_end;
                        break;

                    case "desktop-wide":
                        breakrange.start = breakranges.desktop_wide.start;
                        breakrange.end = breakranges.desktop_wide.end;
                        break;
                }

                return breakrange;
            },

            _hide: function() {
                // what: replacement for $.hide() which toggles the accessible ARIA attribute
                // how: build_ui.show( $foo )
                // note: aria-hidden is set to display:none in the CSS
                var $this = $(this);

                $this.attr('aria-hidden', true);
            },

            _show: function() {
                // what: replacement for $.show() which toggles the accessible ARIA attribute
                // how: build_ui.show( $foo )
                // note: aria-hidden is set to display: none in the CSS
                var $this = $(this);

                $this.attr('aria-hidden', false);
            },

            _em: function(target_px) { // based on our .scss function
                var context = 16, // basefont_size
                    target = target_px.replace('px', ''),
                    target2 = parseInt(target, 10);

                return ( target2/context + 'em' );
            },

            // ADDERS
            // ...

            // SETTERS AND UNSETTERS
            // ...

            // GETTERS
            // ...

            // Public methods

            // CLEANING UP
            destroy: function() {

                return this.each( function() {

                    // Create a jQuery object to use with this individual element
                    var $this = $(this); // module
                        //data = $this.data('ariaHiddenBreakrange');

                    // Revert HTML
                    $this.removeAttr('aria-hidden');

                    // Unbind namespaced events
                    //$(SOME_ELEMENT).ariaHiddenBreakrange('.ariaHiddenBreakrange');

                    // Remove data when deallocating our plugin
                    $this.removeData('ariaHiddenBreakrange');

                });
            }

        }; // end methods

        // Add a new (public) function property named 'ariaHiddenBreakrange' to the jQuery.fn object:
        // $.fn.ariaHiddenBreakrange = function(){ .. }
        //
        // Every jQuery plugin is essentially a large function we add to jQuery's protected 'fn' namespace.
        // We could easily assign our function using “jQuery.pluginName = function”, but then our plugin’s code wouldn’t be protected.
        // So we use “jQuery.fn” as a shortcode to “jQuery.prototype”, meaning it can only be read (and not modified)
        // when using the jQuery namespace to access it.
        $.fn.ariaHiddenBreakrange = function( method ) {

            // Method calling logic from http://docs.jquery.com/Plugins/Authoring
            if ( methods[method] ) {
                return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
            }
            else if ( typeof method === 'object' || ! method ) {
                return methods.init.apply( this, arguments );
            }
            else {
                $.error( 'Method ' +  method + ' does not exist on jQuery.ariaHiddenBreakrange' );
            }

        };

    })(jQuery);
