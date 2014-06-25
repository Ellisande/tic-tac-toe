angular.module('services', []).factory('socket', function($rootScope, $location){
    var socket = io.connect('http://'+$location.host()+':3000');

    var registeredOn = function (eventName, callback) {
      var proxyFunction = function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      };
      socket.on(eventName, proxyFunction);
    };

    var emitWrapper = function (eventName, data, callback) {
        socket.emit(eventName, data, function () {
            var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                }
            });
      });
    };

    return {
        on: registeredOn,
        emit: emitWrapper
    };
});
