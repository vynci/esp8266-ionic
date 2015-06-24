angular.module('starter.services', [])

.factory('Devices', function($http) {
  // Might use a resource here that returns a JSON array

  var ipServer = 'http://esp8266-relays.herokuapp.com';

  return {
    deviceCommand: function(data) {
      console.log(data);
      return $http.post(ipServer + '/device/control', data);
    }
  };
});
