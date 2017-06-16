import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    empty(question) {
      this.get('shoppingCart').empty(question);
    }
  }
});
