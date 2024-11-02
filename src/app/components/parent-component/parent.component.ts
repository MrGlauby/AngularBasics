import { Component, inject, Input, OnInit } from '@angular/core';
import { ChildComponentComponent } from "../child-component/child-component.component";
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { DadComponent } from '../dad/dad.component';
import { MumComponent } from '../mum/mum.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  imports: [
    ChildComponentComponent,
    CommonModule,
    DadComponent,
    MumComponent
  ],
})
export class ParenComponent implements OnInit {





  private dataService = inject(DataService);
  personDatas: any[] = [];

  name: string = '';
  age: number = 0;
  gender: string = '';
  job: string = '';


  carsDatas: any[] = [];
  brand: string = '';
  teams: any[] = [];



  // Alle Daten aus dem Service!
  ngOnInit(): void {
    this.dataService.getAllPersons().subscribe(personDatas => {
      this.personDatas = personDatas;
    });

    this.dataService.getAllCars().subscribe(carsDatas => {
      this.carsDatas = carsDatas;
    });

    this.dataService.getAllTeams().subscribe(teams => {
      this.teams = teams;
    });
  }



  // Output Methoden
  public handleConsoleRequest(event:string){
    console.log('Empfangen im Parent', event);
    }

    public getOutputFromChild(event: string): void {
      console.log('Empfangen im Parent', event);
    }

    public abfangFromChild(event:string){
      console.log('Jo hab ihn from Child!', event)
    }

}
