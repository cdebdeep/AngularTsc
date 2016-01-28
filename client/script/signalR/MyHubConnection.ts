/**
 * Created by debdeep.chaudhuri on 1/28/2016.
 */
///<reference path="../../../../AngularTsc/typings/signalr/signalr.d.ts" />
module deb.app.testApp.signalR {
    export class MyHubConnection implements HubConnection{
        proxies:any;
        transport:{name: string, supportsKeepAlive: (()=>boolean)};
        events:SignalREvents;
        connectionState:any;
        transports:any;
        hub:HubConnection;
        id:string;
        logging:boolean;
        messageId:string;
        url:string;
        qs:any;
        state:number;

        received(callback:(data:{Id: any, Method: any, Hub: any, State: any, Args: any})=>void):HubConnection {
            return undefined;
        }

        createHubProxy(hubName:string):HubProxy {
            return undefined;
        }

        hubConnection(url:string):SignalR {
            return undefined;
        }

        log(msg:string, logging:boolean):void {
        }

        isCrossDomain(url:string):boolean {
            return undefined;
        }

        changeState(connection:SignalR, expectedState:number, newState:number):boolean {
            return undefined;
        }

        isDisconnecting(connection:SignalR):boolean {
            return undefined;
        }

        start():JQueryPromise<any> {
            return undefined;
        }

        /*start(callback:()=>void):JQueryPromise<any> {
            return undefined;
        }

        start(settings:ConnectionSettings):JQueryPromise<any> {
            return undefined;
        }

        start(settings:ConnectionSettings, callback:()=>void):JQueryPromise<any> {
            return undefined;
        }*/

        send(data:string):void {
        }

        stop(async:boolean, notifyServer:boolean):void {
        }

        starting(handler:()=>void):SignalR {
            return undefined;
        }

        /*received(handler:(data:any)=>void):SignalR {
            return undefined;
        }*/

        error(handler:(error:Error)=>void):SignalR {
            return undefined;
        }

        stateChanged(handler:(change:SignalRStateChange)=>void):SignalR {
            return undefined;
        }

        disconnected(handler:()=>void):SignalR {
            return undefined;
        }

        connectionSlow(handler:()=>void):SignalR {
            return undefined;
        }

        sending(handler:()=>void):SignalR {
            return undefined;
        }

        reconnecting(handler:()=>void):SignalR {
            return undefined;
        }

        reconnected(handler:()=>void):SignalR {
            return undefined;
        }


    }
}
