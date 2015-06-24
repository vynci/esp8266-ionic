angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $stateParams, Devices) {

  $scope.powerOff = function (deviceNum) {
    deviceControl(deviceNum, 'off');
  }

  $scope.powerOn = function (deviceNum) {
    deviceControl(deviceNum, 'on');
  }

  function deviceControl(deviceNum, command){
    var deviceInfo = {
      deviceNum : deviceNum,
      command : command
    };

    Devices.deviceCommand(deviceInfo)
      .success(function (data) {
        console.log(data)
      })
      .error(function (error) {
        console.log(error)
      });
  }

})

.controller('AboutCtrl', function($scope, $stateParams, Devices) {

});
