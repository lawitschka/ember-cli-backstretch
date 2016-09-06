# Ember CLI Backstretch

Simple Ember component wrapping [Scott Robbin's jQuery Backstretch plugin](http://srobbin.com/jquery-plugins/backstretch/).

## Installation

This plugin can be installed using Ember CLI's built-in addon install tool:

```
ember install ember-cli-backstretch
```

## Usage

In any template, wrap the content with `jquery-backstretch` and pass in an array
of images and (optionally) a configuration hash.

```handlebars
{{#jquery-backstretch images=backstretchImages config=backstretchConfig}}
  <h2>Welcome to Ember</h2>
{{/jquery-backstretch}}
```

For configuration options, see the original [readme](https://github.com/srobbin/jquery-backstretch#options).

## Contributing

You miss any feature from jQuery Backstretch? Feel free to send me a pull
request!
