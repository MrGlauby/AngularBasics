import { Component, EventEmitter, HostBinding, HostListener, Input, output, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-child-component',
  standalone: true,
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class ChildComponentComponent {


 @Input()
 person : any;

  // @Input()
  // callMyName = '';


  // @Input()
  // name = '';

  // @Input()
  // age: number = 0;

  // @Input()
  // gender = '';

  // @Input()
  // job: string = '';

  // @Input()
  // id: string = '';

  // @Input()
  // headeLine: string = '';

  // @Input()
  // description: string = '';
  // ----------------------------- ngClass []


  items = [{
    name: 'Element 1',
    description: 'Beschreibung 1'
  },
  ];

  selectedItem: any;

  public selectItem(item: any) {
    this.selectedItem = item;
  }

  // --------------------------- ngStyle -----------

  @Input() ngStyle: { [klass: string]: any } = {
    'background-color': 'saddlebrown',
    'border-radius': '10px',
    'padding': '10px',
  };


  // --------------------------- HOST BINDING --------------



  // @HostBinding('class.active')
  // isActive: boolean = false;

  // ----------------------------- HostListener



  counter = 0;

  @HostListener('window:keydown.enter', ['$event'])
  public handleKeyDown(event: KeyboardEvent): void {
    this.counter++;
  }

  public resetCounter(): void {
    this.counter = 0;
  }

  //  ------------------------------------------------------------------------------------------ OUTPUT


  // @Output()
  // public sendEventEmitter = new EventEmitter<string>();

  // public clickEvent():void{
  //   console.log('Wird gesendet!');
  //   this.sendEventEmitter.emit();
  // }

  // @Output()
  // public sendEventEmitter = new EventEmitter<string>();

  // public clickEvent(): void {
  //   console.log('Anfrage!');
  //   this.sendEventEmitter.emit();
  // }



  // Außer auf buttons, wo kann ich noch Outputs Sinnvoll einsetzen??
  @Output()
  public functionForOutput = new EventEmitter<string>();

  public functionForOutputClick(): void {
    console.log('Output Anfrage');
    this.functionForOutput.emit('Daten vom Child!');

  }


  //  -----------------------------Pipes

  today: Date = new Date();

  // ----------------- ng If Start -----------


  isVisible = false;

  public toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  // ----------------- ng If ENDS -----------

  // --------------------- Angulars Signals --------

  // Initialisiert das Signal mit dem Startwert 0
  count = signal(0);

  increment() {
    // Erhöht das Signal um 1
    this.count.update(value => value + 1);
  }




}
