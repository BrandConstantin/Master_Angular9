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
    title = 'MY FIRST Component (Server Component)';
}