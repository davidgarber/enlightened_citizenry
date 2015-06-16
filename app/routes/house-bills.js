// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model: function(params) {
//     var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&zip=' + params.zip;
//     return Ember.$.getJSON(url).then(function(responseJSON) {
//       var legislators = [];
//       responseJSON.results.forEach(function(legislator) {
//         legislators.push(legislator);
//       });
//       return legislators;
//     });
//   }
// });

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url= 'http://congress.api.sunlightfoundation.com/upcoming_bills?chamber=house&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&date=';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var houseBills = [];
      responseJSON.results.forEach(function(houseBill) {
        houseBills.push(houseBill);
      });
      return houseBills;
    });
  }

});
