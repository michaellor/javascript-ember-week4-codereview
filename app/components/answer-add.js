import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(){
      console.log("answer-add js");
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        question: this.get('question')
      };
      console.log(params.question);
      this.sendAction('saveAnswer', params);
    }
  }
});
