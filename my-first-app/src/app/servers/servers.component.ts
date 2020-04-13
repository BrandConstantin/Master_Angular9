import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver 1', 'Testserver 2'];

  userName = '';
  ifNotEmpty = false;
  createdUserName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server created successfully: " + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateUserName() {
    this.createdUserName = "Succesfully user created: " + this.userName;

    if(!(this.createdUserName === '')){
      this.ifNotEmpty = true;
    }
  }

  onUpdateUserName(event: any) {
    this.createdUserName = (<HTMLInputElement>event.target).value;
  }
}
