import Ember from 'ember';

export default Ember.Service.extend({
  answers: [],

  add(answer) {
    console.log("1");
    length: this.get('answers').length;
    for(var i=0; i < length; i++) {
      console.log("length", length);
      if(answer === (this.get('answers')[i])) {
        console.log("already on list");
      } else {
        this.get('answers').pushObject(answer);
      }
    }
  }
});
