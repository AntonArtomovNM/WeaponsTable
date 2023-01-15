import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less']
})
export class SearchFieldComponent {
  @Output() onSearch = new EventEmitter<string>();
  
  filterValue: string;

  onChange() {
    this.onSearch.emit(this.filterValue?.toLowerCase() || '');
  }
}
