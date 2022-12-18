import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  serverName = ''
  serverCreated = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  addServer() {
    this.serverCreated = true
  }
}
