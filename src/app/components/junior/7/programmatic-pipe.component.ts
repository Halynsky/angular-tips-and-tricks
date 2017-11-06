import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'programmatic-pipe',
  template:
    '<div>Date1: {{formattedDate1}}</div>' +
    '<div>Date2: {{formattedDate2}}</div>' +
    '<div>Date3: {{formattedDate3}}</div>',
  styles: ['']
})
export class ProgrammaticPipeComponent {

  public formattedDate1 = '';
  public formattedDate2 = '';
  public formattedDate3 = '';

  constructor(private datePipe: DatePipe) {
    this.formattedDate1 = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.formattedDate2 = this.datePipe.transform('01-12-2017', 'MMMM d, y, h:mm a');
    this.formattedDate3 = this.datePipe.transform(new Date(), 'full');
  }

}


