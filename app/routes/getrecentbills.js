import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params)
    var url= 'http://congress.api.sunlightfoundation.com/upcoming_bills?legislative_day=' + params.date + '&range=week&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var recentBills = [];
      // console.log(params.date);
      responseJSON.results.forEach(function(recentBill) {
        recentBills.push(recentBill);
        console.log(recentBill);
      });
      return recentBills;
    });
  }
});
