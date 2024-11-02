import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dad',
  standalone: true,
  templateUrl: './dad.component.html',
  styleUrl: './dad.component.scss',
  imports: [

  ],

})
export class DadComponent {




  @Input()
  brand = '';


}
