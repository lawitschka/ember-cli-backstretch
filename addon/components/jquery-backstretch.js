import Ember from 'ember';

export default Ember.Component.extend({
  // Configuration
  images: [],
  config: {},

  setupBackstretch: Ember.on('didInsertElement', function() {
    this.$().backstretch(
      this.get('images'),
      this.get('config')
    );
  }),

  teardownBackstretch: Ember.on('willDestroyElement', function() {
    this.$().backstretch("destroy", true);
  })
});
