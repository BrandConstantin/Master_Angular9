import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        p{
            color: darkred;
        }

        .online{
            background-color: yellow;
        }
    `]
})
export class ServerComponent {
    serverId: number = 4;
    serverStatus: string = 'offline';
    title = 'MY FIRST Component (Server Component)';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}