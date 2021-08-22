import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineCreateComponent } from './machines/machine-create/machine-create.component';
import { MachineListComponent } from './machines/machine-list/machine-list.component';

const routes: Routes = [
  { path: '', component: MachineListComponent },
  { path: 'create', component: MachineCreateComponent },
  { path: 'edit/:id', component: MachineCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
