import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 11, firstName: 'Rambo' },
      { id: 12, firstName: 'Zoro' },
      { id: 13, firstName: 'Itachi' },
      
    ];
    return {employees};
  }
}