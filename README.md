# ct-jquery-ariaHiddenBreakrange

Accessibly control an element's visibility across a range of breakpoints.

__Please note: this plugin is optimised for internal Chrometoaster use. YMMV.__

## Installation

1. In Terminal: `cd /PATH/TO/PROJECT-THEME-FOLDER`
1. `bower install https://github.com/chrometoasters/ct-jquery-ariaHiddenBreakrange.git#v1.0.11 --save`

Note: if you wish to customise where Bower puts installed components, you may add a `.bowerrc` file into this folder:

        {
            "directory" : "PATH/TO/COMPONENTS"
        }

## Functionality

### When JavaScript is disabled:

`ct-jquery-ariaHiddenBreakrange.css` contains `.no-js` rules to dynamically show and hide `$('[data-ariaHiddenBreakrange]')` elements at the appropriate breakpoint.

This is a fallback for noscript users. It is inaccessible as there is no communication to a screenreader that an element is hidden, only a visual indicator for sighted users.


### When JavaScript is enabled:

`ct-jquery-ariaHiddenBreakrange.css` sets elements with `aria-hidden="true"` to `display:none`.

On initial load, and when the viewport is resized, `$('[data-ariaHiddenBreakrange]')` elements are dynamically shown and hidden by setting and changing the value of their WAI-ARIA `aria-hidden` attribute.

This is the most accessible way to hide elements, as the accessibility API can communicate to a screenreader that an element is hidden, in addition to the visual indicator for sighted users.

__Note:__ to apply `display:inline` rather than `display:block` when an element is visible, use `ariaHiddenBreakrange` with a `span` element.

## Usage

### Set up

When JavaScript is disabled, a parent element (typically the `html` element) should include the noscript flag `.no-js`. This flag should be removed via JavaScript.

Include the following HTML for MSIE and noscript support:

    <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
    <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
    <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
    <!--[if IE 9]>         <html class="no-js lt-ie10"> <![endif]-->
    <!--[if gt IE 9]><!--> <html class="no-js"> <!--<![endif]-->

Specify an element to hide within a particular breakrange:

    <div data-ariaHiddenBreakrange="mobile,tablet">Some text for desktop and wider</div>

Then call the JavaScript function with the default options like so:

    $('[data-ariaHiddenBreakrange]').ariaHiddenBreakrange();

### Dependencies

Ensure that the following assets are available on your page:

1. `jquery.js/jquery.min.js` (dependency, via Bower)
1. `media-match/media.match.min.js` (polyfill dependency, via Bower)
1. `enquire.js/dist/enquire.min.js` (dependency, via Bower)
1. `dist/ct-jquery-ariaHiddenBreakrange.css` (styles, bundled)
1. `dist/ct-jquery-ariaHiddenBreakrange.min.js` (script, bundled)

## Demo

Please refer to `demos/ct-jquery-ariaHiddenBreakrange.html`.

## Tests

Please run `test/index-responsive.html`.

## Quirks

As this is the first release of this plugin there are some limitations:

1. the breakpoint names and pixel values are preset; you can override these when calling the jQuery function but there's little point in doing so as there's no matching CSS support for noscript users
1. the breakrange keywords must be listed in order of narrowest to widest, i.e. `mobile,tablet,desktop,desktop-wide`
1. the breakrange keywords are device specific and can't be changed
1. tests must be run and passed at each breakpoint via the jResize toolbar
1. the script assumes a base font size of `16px`
