import Ember from 'ember';

export default Ember.Component.extend({
isImageShowing: false,
isQuestionShowing:false,
actions: {
  imageShow: function() {
    this.set('isImageShowing', true);
    this.set('questionShowing', true);
  },

imageHide: function() {
  this.set('isImageShowing', false);
  this.set('questionShowing', false);
},
update(rental, params) {
  this.sendAction('update', question, params);
},
delete(question) {
  if(confirm('Are you sure you want to delete this question?')) {
    this.sendAction('destroyQuestion', question);
  }
}
}
});
