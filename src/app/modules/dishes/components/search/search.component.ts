import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inetum-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() callbackData: EventEmitter<any> = new EventEmitter();
  src:string = '';
  constructor() { }


  ngOnInit(): void {
  }

  callSearch(query: string) {
        this.callbackData.emit(query);
      
  }

}
