import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tache',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-tache.component.html',
  styleUrl: './add-tache.component.css'
})
export class AddTacheComponent {
  // Attributs
  public titre = "";
  public contenu = "";
  public realise = "";

  // Methodes
  constructor(){

  }
  // la fonction qui ajoute une tâche
  enregister() {
    if (this.titre == "" || this.contenu == "") {
      this.sweetMessage("Désolé!!!", "Veuillez renseigner tous les champs", "error");
    } {
      let tachesTmp = JSON.parse(localStorage.getItem("lestaches") ?? '[]');
      tachesTmp.push({ titre: this.titre, contenu: this.contenu, realise: this.realise });
      localStorage.setItem("lestaches", JSON.stringify(tachesTmp));
      this.sweetMessage("Merci!!!", "Tâche ajoutée avec succès", "success");
    }

  }

  // la fonctionne qui affiche les popup d'alerte
  sweetMessage(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
}
