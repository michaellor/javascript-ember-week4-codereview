import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
        answers: this.get('answers')
      };
      this.sendAction('updateQuestion', question, params);
    }
  }
});
