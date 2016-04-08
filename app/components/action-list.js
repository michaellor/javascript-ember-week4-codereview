import Ember from 'ember';

export default Ember.Component.extend({

  fullAction: Ember.computed('answer.author', function() {
    return this.get('answer.author') + ' answered a question from ' + this.get('question.author');
  }),

});
