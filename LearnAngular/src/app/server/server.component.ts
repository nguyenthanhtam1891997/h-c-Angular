import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  allowNowServer = false;
  serverCreationStatus = 'no sever war create '
  valueInput = ''
  serverStatus: string = 'onLine'

  constructor() {

    setTimeout(() => {
      this.allowNowServer = true
    }, 2000)
    this.serverStatus = Math.random() > 0.5 ? 'onLine' : 'offLine'
  }

  ngOnInit(): void {
  }

  onCreateStatus() {
    this.serverCreationStatus = 'server was create'
  }

  // onUpdateServerName(value: any) {
  //   console.log(value.target.value)
  //   this.valueInput = value.target.value
  //
  // cách để lấy value input nhung không biết kiểu diwx liệu
  //
  // }
  onUpdateServerName(value: Event) {
    // cách lấy value input kiểu dữ liệu Event

    this.valueInput = (<HTMLInputElement>value.target).value
  }

  getColor() {
    return this.serverStatus === 'onLine' ? 'green' : 'red'
  }
}
