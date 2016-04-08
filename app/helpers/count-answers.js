import Ember from 'ember';

export function countAnswers(params) {
  var question = params[0];
  console.log(question);
  var answers = question.get('answers').get('length');

  if(answers === 1) {
    return Ember.String.htmlSafe( '  <span id="small-font">('+ answers +' answer)</span>');
  }
  return Ember.String.htmlSafe( '  <span id="small-font">('+ answers +' answers)</span>');
}

export default Ember.Helper.helper(countAnswers);
