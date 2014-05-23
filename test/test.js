// VALIDATION SETTINGS FOR JSHINT.COM
/*jshint browser:true, jquery:true, strict:true, devel:true */
/*global QUnit:true, equal:true, module, test */

// Unit tests for ct-jquery-ariaHiddenBreakrange.js
// Author: dan.smith@chrometoaster.com
// equal( test, expected value, string to display in output )
//
// ----------------------------------------------------------------

var testvars = {};

QUnit.begin( function() {

    "use strict";

    testvars.container = '#qunit-fixture';

    testvars.id = 'TOOD';
    testvars.target = '#TODO';

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
        //
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

/*
-------------------------------------------------------------------
Destroy
-------------------------------------------------------------------
*/

module("Destroy", {

    setup: function() {
        "use strict";

        // Setup
        $(testvars.target).ct-jquery-ariaHiddenBreakrange({
            // options
        });

        // Destroy
        $(testvars.target).ct-jquery-ariaHiddenBreakrange('destroy');
    },
    teardown: function() {
        "use strict";
        //
    }
});

test("TESTNAME", function() {
    "use strict";

    equal(
        TODO,
        true,
        ''
    );
});