import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  serverName = ''
  serverCreated = false;
  options=['a','b','c','d','e','f','g']
  selectedOption:any
  constructor() {
  }

  ngOnInit(): void {
  }

  addServer() {
    this.serverCreated = true
  }

}
