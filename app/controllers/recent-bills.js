import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
      // alert(this.get('date'));
      this.transitionToRoute('getrecentbills', this.get('date'));
    }
  }
});
