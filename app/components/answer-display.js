import Ember from 'ember';

export default Ember.Component.extend({
  userList: Ember.inject.service(),

  actions: {
    addToList(answer) {
      this.get('userList').add(answer);
    },
  }
});
