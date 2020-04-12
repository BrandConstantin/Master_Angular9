import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        p{
            color: darkred;
        }
    `]
})
export class ServerComponent {
    serverId: number = 4;
    serverStatus: string = 'offline but working';
    title = 'MY FIRST Component (Server Component)';

    getServerStatus(){
        return this.serverStatus;
    }
}