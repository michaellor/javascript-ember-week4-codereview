import Ember from 'ember';

export function coldQuestion(params) {
  var question = params[0];
  console.log(params[0])

  if(question.get('answers').get('length') < 1) {
    return Ember.String.htmlSafe('<span class="glyphicons glyphicons-snowflake">hello</span>')
  } else if(question.get('answers').get('length') > 3) {
    return Ember.String.htmlSafe('<span class="glyphicons glyphicon-fire color-red">hello</span>')
  }
}

export default Ember.Helper.helper(coldQuestion);
