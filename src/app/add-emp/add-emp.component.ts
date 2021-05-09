import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }

  add(firstName: string): void {
    firstName = firstName.trim();
    if (!firstName) { return; }
    this.employeeService.addEmployee({ firstName } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee.id).subscribe();
  }


}
