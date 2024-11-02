import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiv-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactiv-form.component.html',
  styleUrl: './reactiv-form.component.scss'
})
export class ReactivFormComponent {

  testForm = new FormGroup({
    firstName: new FormControl('Name'),
    lastName: new FormControl('Lastname'),
    checkbox: new FormControl(true),
  });



public save(){
  console.log('hier ist die Eingabe!', this.testForm.value );

}

}
