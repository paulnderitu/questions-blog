import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating: desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question')){
        this.sendAction('destroyQuestion', question);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
    }
  });
