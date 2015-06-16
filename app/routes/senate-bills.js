import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url= 'http://congress.api.sunlightfoundation.com/upcoming_bills?chamber=senate&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&date=';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var senateBills = [];
      responseJSON.results.forEach(function(senateBill) {
        senateBills.push(senateBill);
      });
      return senateBills;
    });
  }
});
