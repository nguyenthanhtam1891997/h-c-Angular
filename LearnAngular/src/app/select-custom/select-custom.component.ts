import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-custom',
  templateUrl: './select-custom.component.html',
  styleUrls: ['./select-custom.component.scss']
})
export class SelectCustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() options: any[] ;
  @Input() key: string | undefined;
  @Input() placeholder: string | undefined;

  @Output() selectedOptionChange = new EventEmitter<any>();

  showOptions = true;
  selectedOption: any ='To Do';
  // placeholder: any ='To Do';

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  selectOption(option: any) {
    this.selectedOption = option[this.key];
    this.selectedOptionChange.emit(option);
    this.showOptions = false;
  }
}
