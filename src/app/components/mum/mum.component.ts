import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mum',
  standalone: true,
  templateUrl: './mum.component.html',
  styleUrl: './mum.component.scss',
  imports: [

  ],

})
export class MumComponent {

  @Input()
  mumsName: string = '';


  @Input()
  kakadu: string = '';

  @Input()
  pupu: string = '';

}
