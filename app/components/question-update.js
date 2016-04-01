import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question) {
      var params = {
        author: this.get('question.author'),
        question: this.get('question.question'),
        notes: this.get('question.notes'),
        answers: this.get('question.answers')
      };
      this.sendAction('updateQuestion', question, params);
    }
  }
});
