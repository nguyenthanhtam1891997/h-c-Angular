import {Component} from "@angular/core";

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html'
})
export class BindingDataComponent {
  serverId: number = 10;
  serverStatus: string = 'offLife'
  userName = ''

  getServerStatus() {
    return this.serverStatus;
  }

  resetUserName() {
    this.userName = ''
  }
}
