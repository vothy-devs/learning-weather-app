import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() zipsearch!:string
  @Output() updateZip = new EventEmitter<string> ();

  ngOnInit(): void {
      
  }
  postZip(zip:string) {
    this.updateZip.emit(zip);
  }
}
