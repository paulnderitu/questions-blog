import Ember from 'ember';

export default Ember.Component.extend({
isImageShowing: false,
isQuestionShowing:false,

shoppingCart: Ember.inject.service(),

actions: {
  addToCart(question) {
    this.get('shoppingCart').add(question);
  },

  imageShow: function() {
    this.set('isImageShowing', true);
    this.set('questionShowing', true);
  },

imageHide: function() {
  this.set('isImageShowing', false);
  this.set('questionShowing', false);
}
}
});
