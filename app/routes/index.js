import Ember from 'ember';

var questions=[{
title: "How to learn code",
  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  author: "Paul Nderitu",
  image: "http://mha1.nic.in/foreigDiv/images/FAQs.jpg",
  date: "15th May"
}, {

    title: "Where does rain come from?",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Sam Kinuthia",
    image: "https://www.csn.edu/sites/default/files/images/imported/faq.jpg",
    date: "5th June"
  },{

      title: "10 Reasons why you should eat githeri",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Wachira Andrew",
      image: "https://i.ytimg.com/vi/L1arsLxKgeg/maxresdefault.jpg",
      date: "5th June"

}];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    update(question, params) {
      rental.save();
      this.transitionTo('index');
    },

    destroyQuestion(question){
      question.destroyRecord();
      this.transitionTo('index');
    },


  }
});
