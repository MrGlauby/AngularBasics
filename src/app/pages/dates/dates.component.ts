import { Component, inject, OnInit, EventEmitter } from '@angular/core';
import { ChildComponentComponent } from "../../components/child-component/child-component.component";
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dates',
  standalone: true,
  templateUrl: './dates.component.html',
  styleUrl: './dates.component.scss',
  imports: [
    ChildComponentComponent,
    CommonModule,
    RouterLink,
  ],
})
export class DatesComponent {


  // DATA and NgOnInit ------------
  private dataService = inject(DataService)
  personDatas: any[] = [];

  name: string = '';
  age: number = 0;
  gender: string = '';
  job : string = '';

ngOnInit(): void{
  this.dataService.getAllPersons().subscribe(personDatas => {
    this.personDatas = personDatas
  });
}



// ------------ OUTPUT


// public catchOutput(event:string){
//   console.log('Jo kommt an!', event)

// }

// public handleConsoleRequest(event:string){
//   console.log('Empfangen im Parent', event);
//   }

//   public catchOutput(event:string){
//     console.log('jo is da!',event);

//   }


}
