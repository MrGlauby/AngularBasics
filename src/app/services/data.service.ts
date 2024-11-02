import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car, Person, Team } from '../services/person.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public personDatas: Person[] = [
    {
      name: 'Max Müller',
      age: 30,
      gender: 'Männlich',
      job: 'Softwareentwickler'
    },

    {
      name: 'Lisa Meier',
      age: 25,
      gender: 'Weiblich',
      job: 'Grafikdesignerin'
    },

    {
      name: 'Karl Schmidt',
      age: 45,
      gender: 'Männlich',
      job: 'Ingenieur'
    },

    {
      name: 'Anna Weber',
      age: 28,
      gender: 'Weiblich',
      job: 'Lehrerin'
    },

    {
      name: 'Peter Hoffmann',
      age: 35,
      gender: 'Männlich',
      job: 'Projektmanager'
    }
  ];

  public carsDatas: Car[] = [
    {
      brand: 'VW'
    },

    {
      brand: 'Audi'
    },

    {
      brand: 'BMW'
    },

    {
      brand: 'Mercedes'
    },

    {
      brand: 'Ford'
    }
  ];



  public teams: Team[] = [
    {
      name: 'VogelTeam'
    },
    {
      name: 'MenschenTeam'
    },
    {
      name: 'AffenTeam'
    },
    {
      name: 'NeardTeam'
    },

  ]


  public getAllTeams(): Observable<Team[]> {
    return of(this.teams);
  }


  public getAllPersons(): Observable<Person[]> {
    return of(this.personDatas);
  };

  public getAllCars(): Observable<Car[]>{
    return of(this.carsDatas);
  };



}
