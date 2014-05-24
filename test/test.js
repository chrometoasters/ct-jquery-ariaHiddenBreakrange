// VALIDATION SETTINGS FOR JSHINT.COM
/*jshint browser:true, jquery:true, strict:true, devel:true */
/*global QUnit:true, equal:true, module, test, enquire */

// Unit tests for ct-jquery-ariaHiddenBreakrange.js
// Author: dan.smith@chrometoaster.com
// equal( test, expected value, string to display in output )
//
// ----------------------------------------------------------------

var testvars = {};

QUnit.begin( function() {

    "use strict";

    testvars.container = '#qunit-fixture';

    testvars.target = '[data-ariaHiddenBreakrange]';

});

/*
-------------------------------------------------------------------
Prerequisites
-------------------------------------------------------------------
*/

module("Prerequisites");

test("enquire.js", function() {

    "use strict";

    equal(
        typeof enquire.register === 'undefined',
        false,
        'loaded'
    );
});

test("ct-jquery-ariaHiddenBreakrange.js", function() {

    "use strict";

    equal(
        typeof $.fn.ariaHiddenBreakrange === 'undefined',
        false,
        'loaded'
    );
});

test("ct-jquery-ariaHiddenBreakrange.css", function() {

    "use strict";

    equal(
        $('link[href*="ct-jquery-ariaHiddenBreakrange"]').length,
        1,
        'loaded'
    );
});

test("no .no-js parent", function() {

    "use strict";

    equal(
        $(testvars.target).parents('.no-js').length,
        0,
        'removed'
    );
});

/*
-------------------------------------------------------------------
Breakrange is hidden
TODO: typeof enquire.registerImmediate
-------------------------------------------------------------------
*/

module("Breakrange", {

    setup: function() {
        "use strict";
        // Setup
        $(testvars.target).ariaHiddenBreakrange();
    },
    teardown: function() {
        "use strict";
        $(testvars.target).ariaHiddenBreakrange('destroy');
    }
});

test("mobile: <= 767px", function() {
    "use strict";

    console.log( 'mobile test:', $(testvars.container).html() );

    equal(
        $('[data-ariaHiddenBreakrange="mobile"]').is(':hidden'),
        true,
        'mobile is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="mobile,tablet"]').is(':hidden'),
        true,
        'mobile,tablet is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet"]').is(':visible'),
        true,
        'tablet is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="mobile,tablet,desktop"]').is(':hidden'),
        true,
        'mobile,tablet,desktop is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet,desktop"]').is(':visible'),
        true,
        'tablet,desktop is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop"]').is(':visible'),
        true,
        'desktop is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet,desktop,desktop-wide"]').is(':visible'),
        true,
        'tablet,desktop,desktop-wide is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop,desktop-wide"]').is(':visible'),
        true,
        'desktop,desktop-wide is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop-wide"]').is(':visible'),
        true,
        'desktop-wide is visible'
    );
});

test("tablet <= 979px", function() {
    "use strict";

    console.log( 'tablet test:', $(testvars.container).html() );

    equal(
        $('[data-ariaHiddenBreakrange="mobile"]').is(':visible'),
        true,
        'mobile is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="mobile,tablet"]').is(':hidden'),
        true,
        'mobile,tablet is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet"]').is(':hidden'),
        true,
        'tablet is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="mobile,tablet,desktop"]').is(':hidden'),
        true,
        'mobile,tablet,desktop is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet,desktop"]').is(':hidden'),
        true,
        'tablet,desktop is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop"]').is(':visible'),
        true,
        'desktop is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet,desktop,desktop-wide"]').is(':hidden'),
        true,
        'tablet,desktop,desktop-wide is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop,desktop-wide"]').is(':visible'),
        true,
        'desktop,desktop-wide is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop-wide"]').is(':visible'),
        true,
        'desktop-wide is visible'
    );
});

test("desktop <= 1255px", function() {
    "use strict";

    console.log( 'desktop test:', $(testvars.container).html() );

    equal(
        $('[data-ariaHiddenBreakrange="mobile"]').is(':visible'),
        true,
        'mobile is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="mobile,tablet"]').is(':visible'),
        true,
        'mobile,tablet is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet"]').is(':visible'),
        true,
        'tablet is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="mobile,tablet,desktop"]').is(':hidden'),
        true,
        'mobile,tablet,desktop is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet,desktop"]').is(':hidden'),
        true,
        'tablet,desktop is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop"]').is(':hidden'),
        true,
        'desktop is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet,desktop,desktop-wide"]').is(':hidden'),
        true,
        'tablet,desktop,desktop-wide is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop,desktop-wide"]').is(':hidden'),
        true,
        'desktop,desktop-wide is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop-wide"]').is(':visible'),
        true,
        'desktop-wide is visible'
    );
});

test("desktop-wide", function() {
    "use strict";

    console.log( 'desktop-wide test:', $(testvars.container).html() );

    equal(
        $('[data-ariaHiddenBreakrange="mobile"]').is(':visible'),
        true,
        'mobile is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="mobile,tablet"]').is(':visible'),
        true,
        'mobile,tablet is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet"]').is(':visible'),
        true,
        'tablet is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="mobile,tablet,desktop"]').is(':visible'),
        true,
        'mobile,tablet,desktop is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet,desktop"]').is(':visible'),
        true,
        'tablet,desktop is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop"]').is(':visible'),
        true,
        'desktop is visible'
    );

    equal(
        $('[data-ariaHiddenBreakrange="tablet,desktop,desktop-wide"]').is(':hidden'),
        true,
        'tablet,desktop,desktop-wide is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop,desktop-wide"]').is(':hidden'),
        true,
        'desktop,desktop-wide is hidden'
    );

    equal(
        $('[data-ariaHiddenBreakrange="desktop-wide"]').is(':hidden'),
        true,
        'desktop-wide is hidden'
    );
});

/*
-------------------------------------------------------------------
Destroy
-------------------------------------------------------------------
*/

module("Destroy", {

    setup: function() {
        "use strict";

        // Setup
        $(testvars.target).ariaHiddenBreakrange();

        // Destroy
        $(testvars.target).ariaHiddenBreakrange('destroy');
    },
    teardown: function() {}
});

test("aria-hidden removed", function() {
    "use strict";

    equal(
        $(testvars.target).attr('aria-hidden') === undefined,
        true,
        ''
    );
});
