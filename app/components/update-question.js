import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
        image: this.get('image'),
        date: this.get('date'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
    }
  
});
