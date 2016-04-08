import Ember from 'ember';

export default Ember.Service.extend({
  answers: [],

  add(answer) {
    length: this.get('answers').length;
    for(var i=0; i < length; i++) {
      console.log("length:", length);
      console.log("i:", i);
      if(answer === this.get('answers')[i]) {
        console.log("already on list");
        return "already on list";
      } else {
        this.get('answers').pushObject(answer);
      }
    }
  }
});
