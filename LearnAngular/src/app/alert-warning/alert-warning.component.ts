import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-warning',
  // templateUrl: './alert-warning.component.html',
  // styleUrls: ['./alert-warning.component.scss']
  template: `
  <p> this is a warning you are in dannger! </p>
  `,
  styles:[
    `
      p{
        padding:  20px;
        background-color: mistyrose;
        border: 1px solid red;
      }


    `
  ]
})
export class AlertWarningComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
