import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import {EditEmpComponent} from './edit-emp/edit-emp.component';
import {ViewEmpComponent} from './view-emp/view-emp.component';



// './components/home/home.component'
const routes: Routes = [
  {path: '', redirectTo: '/view-emp', pathMatch: 'full' },
  {path: 'edit-emp', component: EditEmpComponent},
  {path: 'view-emp', component: ViewEmpComponent},
  {path: 'add-emp', component: AddEmpComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

