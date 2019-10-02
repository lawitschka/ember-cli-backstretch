import Ember from 'ember';

export default Ember.Component.extend({
  // Configuration
  images: [],
  config: {},

  setupBackstretch: Ember.on('didInsertElement', function() {
    this.element.addEventListener(this.get('images'), this.get('config'));
  }),

  teardownBackstretch: Ember.on('willDestroyElement', function() {
    this.element.addEventListener("destroy", true);
  })
});
