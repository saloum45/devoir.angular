import { Routes } from '@angular/router';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { EditTacheComponent } from './edit-tache/edit-tache.component';
import { ListTacheComponent } from './list-tache/list-tache.component';

export const routes: Routes = [
  {
    path:"",redirectTo:"list",pathMatch:"full"
  },
  {
    path:"add",component:AddTacheComponent
  },
  {
    path:"edit/:id",component:EditTacheComponent
  },
  {
    path:"list",component:ListTacheComponent
  }
];

