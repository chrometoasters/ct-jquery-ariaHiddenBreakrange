// VALIDATION SETTINGS FOR JSHINT.COM
/*jshint browser:true, jquery:true, strict:true, devel:true */
/*global QUnit:true, equal:true, module, test */

// Unit tests for the state jQuery plugin
// Author: dan.smith@chrometoaster.com
// equal( test, expected value, string to display in output )
//
// ----------------------------------------------------------------

var testvars = {};

QUnit.begin( function() {

    "use strict";

    testvars.container = '#qunit-fixture';

    testvars.id = 'TOOD';

    // TODO
    // Add test for focus (working in demo)

});

/*
-------------------------------------------------------------------
Prerequisites
-------------------------------------------------------------------
*/

module("Prerequisites");


/*
-------------------------------------------------------------------
Set up
-------------------------------------------------------------------
*/

module("Set up", {

    setup: function() {
        "use strict";
        //
    },
    teardown: function() {
        "use strict";

        // Destroy to ensure no cookie is remaining
        $(testvars.module).state('destroy');
    }
});

test("TODO", function() {
    "use strict";

    // Setup
    // TODO

    equal(
        TODO,
        true,
        ''
    );

});