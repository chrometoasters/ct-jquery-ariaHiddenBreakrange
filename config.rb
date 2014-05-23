# Compass configuration file
# This is loaded by the Grunt plugin
# and configuration is done here where possible to allow developers to bypass Grunt if they desire

# Tips: https://gist.github.com/timkelty/1595176

# Usage sans Grunt
# Note: exec runs the executable that comes with a gem in your bundle
# 1. bundle exec compass compile OR # bundle exec compass watch
# 2. blessc resources/build/styles/screen.css resources/build/styles/screen.blessed.css
# 3. rm resources/build/styles/screen.css

# Require gems and Compass plugins
require "compass"
require "susy"

# General
output_style = :compressed
# <%= project.root %>/
project_path = File.dirname(__FILE__) + "/"

# Sass Paths
http_path = "/"

# Sass Directories

# <%= project.build.styles %>
css_dir = "dist"

# <%= project.dev.styles %>
sass_dir = "dev"

additional_import_paths = [
    project_path + "bower_components",
]