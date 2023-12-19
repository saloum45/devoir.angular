import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tache',
  standalone: true,
  imports: [],
  templateUrl: './add-tache.component.html',
  styleUrl: './add-tache.component.css'
})
export class AddTacheComponent {
  public titre="";
  public contenu="";
  public realise="";

  enregister(){
    Swal.fire({
      title: "Bravo",
      text: "Tâche ajoutée avec succès",
      icon: "success"
    });
  }
}
