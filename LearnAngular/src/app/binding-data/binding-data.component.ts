import {Component} from "@angular/core";

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html'
})
export class BindingDataComponent {
  serverId: number = 10;
  serverStatus: string = 'offLife'

  getServerStatus() {
    return this.serverStatus;
  }
}
