# ct-jquery-ariaHiddenBreakrange

Control an element's aria-hidden property across different breakpoints.

__Please note: this plugin is optimised for internal Chrometoaster use. YMMV.__

## Installation

1. In Terminal: `cd /PATH/TO/PROJECT-THEME-FOLDER`
1. `bower install https://github.com/chrometoasters/ct-jquery-ariaHiddenBreakrange.git#v0.0.1 --save`

Note: if you wish to customise where Bower puts installed components, you may add a `.bowerrc` file into this folder:

        {
            "directory" : "PATH/TO/COMPONENTS"
        }

## Usage

### Set up

    $(TARGET).ct-jquery-ariaHiddenBreakrange({
        PROPERTY: 'VALUE', // DESCRIPTION
    });

### Dependencies

Ensure that the following scripts are loaded by your page:

1. `DEPENDENCY/DEPENDENCY.js` (dependency, via Bower)
1. `dist/ct-jquery-ariaHiddenBreakrange.min.js` (this script, bundled)

### ADDITIONAL_HEADING

ADDITIONAL_INFORMATION

## Demo

Please refer to `demos/ct-jquery-ariaHiddenBreakrange.html`.