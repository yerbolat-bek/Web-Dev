import {Component} from '@angular/core';
import {LowerCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: ` {{ username | lowercase}} , {{ username | uppercase}}`,
  imports: [LowerCasePipe, UpperCasePipe],
})
export class App {
  username = 'yOunGTECh';
}
