/**
 * Created by debdeep.chaudhuri on 1/28/2016.
 */
///<reference path="../../../../AngularTsc/typings/signalr/signalr.d.ts" />
var deb;
(function (deb) {
    var app;
    (function (app) {
        var testApp;
        (function (testApp) {
            var signalR;
            (function (signalR) {
                var MyHubConnection = (function () {
                    function MyHubConnection() {
                    }
                    MyHubConnection.prototype.received = function (callback) {
                        return undefined;
                    };
                    MyHubConnection.prototype.createHubProxy = function (hubName) {
                        return undefined;
                    };
                    MyHubConnection.prototype.hubConnection = function (url) {
                        return undefined;
                    };
                    MyHubConnection.prototype.log = function (msg, logging) {
                    };
                    MyHubConnection.prototype.isCrossDomain = function (url) {
                        return undefined;
                    };
                    MyHubConnection.prototype.changeState = function (connection, expectedState, newState) {
                        return undefined;
                    };
                    MyHubConnection.prototype.isDisconnecting = function (connection) {
                        return undefined;
                    };
                    MyHubConnection.prototype.start = function () {
                        return undefined;
                    };
                    /*start(callback:()=>void):JQueryPromise<any> {
                        return undefined;
                    }
            
                    start(settings:ConnectionSettings):JQueryPromise<any> {
                        return undefined;
                    }
            
                    start(settings:ConnectionSettings, callback:()=>void):JQueryPromise<any> {
                        return undefined;
                    }*/
                    MyHubConnection.prototype.send = function (data) {
                    };
                    MyHubConnection.prototype.stop = function (async, notifyServer) {
                    };
                    MyHubConnection.prototype.starting = function (handler) {
                        return undefined;
                    };
                    /*received(handler:(data:any)=>void):SignalR {
                        return undefined;
                    }*/
                    MyHubConnection.prototype.error = function (handler) {
                        return undefined;
                    };
                    MyHubConnection.prototype.stateChanged = function (handler) {
                        return undefined;
                    };
                    MyHubConnection.prototype.disconnected = function (handler) {
                        return undefined;
                    };
                    MyHubConnection.prototype.connectionSlow = function (handler) {
                        return undefined;
                    };
                    MyHubConnection.prototype.sending = function (handler) {
                        return undefined;
                    };
                    MyHubConnection.prototype.reconnecting = function (handler) {
                        return undefined;
                    };
                    MyHubConnection.prototype.reconnected = function (handler) {
                        return undefined;
                    };
                    return MyHubConnection;
                })();
                signalR.MyHubConnection = MyHubConnection;
            })(signalR = testApp.signalR || (testApp.signalR = {}));
        })(testApp = app.testApp || (app.testApp = {}));
    })(app = deb.app || (deb.app = {}));
})(deb || (deb = {}));
//# sourceMappingURL=MyHubConnection.js.map