// code dump from http://inclusive.dan.tki.org.nz/

        breakpoints_translate_breakrange: function(breakrange_keyword) {

            // map the breakrange keyword to a pixel value
            // these values are copied from _base.scss

            // multiple values can be used, comma separated
            // note that ranges must be consecutive
            // eg mobile,tablet is ok because the tablet breakrange comes after the mobile breakrange
            // eg mobile,desktop is not ok because the desktop breakrange does not come after the mobile breakrange

            var breakrange = {};
            breakrange.start = false;
            breakrange.end = false;
            var mobile_start = '0px';
            var mobile_end = '767px';
            var tablet_start = '768px';
            var tablet_end = '979px';
            var desktop_start = '980px';
            var desktop_end = '1255px';
            var desktop_wide_start = '1256px';
            var desktop_wide_end = false;


            if ( breakrange_keyword === 'mobile') {
                breakrange.start = mobile_start;
                breakrange.end = mobile_end;
            }
            else if ( breakrange_keyword === 'mobile,tablet') {
                breakrange.start = mobile_start;
                breakrange.end = tablet_end;
            }
            else if ( breakrange_keyword === 'tablet') {
                breakrange.start = tablet_start;
                breakrange.end = tablet_end;
            }
            else if ( breakrange_keyword === 'mobile,tablet,desktop') {
                breakrange.start = mobile_start;
                breakrange.end = desktop_end;
            }
            else if ( breakrange_keyword === 'tablet,desktop') {
                breakrange.start = tablet_start;
                breakrange.end = desktop_end;
            }
            else if ( breakrange_keyword === 'desktop') {
                breakrange.start = desktop_start;
                breakrange.end = desktop_end;
            }
            else if ( breakrange_keyword === 'tablet,desktop,desktop-wide') {
                breakrange.start = tablet_start;
                breakrange.end = desktop_wide_end;
            }
            else if ( breakrange_keyword === 'desktop,desktop-wide') {
                breakrange.start = desktop_start;
                breakrange.end = desktop_wide_end;
            }
            else if ( breakrange_keyword === 'desktop-wide') {
                breakrange.start = desktop_wide_start;
                breakrange.end = desktop_wide_end;
            }

            return breakrange;
        },

        // TODO: it would be useful to move helpers like this to CT_UI
        // TODO: make into a plugin
        breakpoints_setup_aria: function() {

            // the default visibility for items is visible
            // data-hidden-at allows items to be accessibly hidden in certain scenarios
            $('[data-aria-hidden-breakrange]').each( function(i, item) {

                var $item = $(item);
                var val = $item.data('aria-hidden-breakrange');
                var breakrange_start = false;
                var breakrange_end = false;
                var media_query = '';

                if ( val === 'js' ) {
                    IE_UI.hide( $item );
                    return;
                }
                else { // if ( // assume breakpoint
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

                    breakrange_start = IE_UI.breakpoints_translate_breakrange( val ).start;
                    breakrange_end = IE_UI.breakpoints_translate_breakrange( val ).end;

                    if ( breakrange_start && breakrange_end ) {
                        media_query = 'screen and (min-width:' + IE_UI.em( breakrange_start ) + ') and (max-width:' + IE_UI.em( breakrange_end ) + ')';
                    }
                    else if ( breakrange_start && ! breakrange_end ) {
                        media_query = 'screen and (min-width:' + IE_UI.em( breakrange_start ) + ')';
                    }

                    if ( media_query !== '' ) {

                        enquire.registerImmediate( media_query, {

                            // when within the breakrange
                            match: function() {
                                $item.attr('aria-hidden', true);
                            },

                            // when outside the breakrange
                            unmatch : function() {
                                $item.attr('aria-hidden', false);
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
            });
        },


// INIT, this also needs to happen after Ajax

        this.breakpoints_setup_aria();