import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-tache',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-tache.component.html',
  styleUrl: './edit-tache.component.css'
})
export class EditTacheComponent implements OnInit {
  // Attributs
  public titre = "";
  public contenu = "";
  public realise = "";

  // Methodes
  constructor(private route: Router, private routeActivated: ActivatedRoute) {

  }
  ngOnInit(): void {
    let tachesTmp = JSON.parse(localStorage.getItem("lestaches") ?? '[]');
    tachesTmp.forEach((element: any) => {
      if (element.id == this.routeActivated.snapshot.params['id']) {
        this.titre = element.titre;
        this.contenu = element.contenu;
        this.realise = element.realise;
      }
    });
  }
  // la fonction qui ajoute une tâche
  enregister() {
    if (this.titre == "" || this.contenu == "") {
      this.sweetMessage("Désolé!!!", "Veuillez renseigner tous les champs", "error");
    } else {
      let tachesTmp = JSON.parse(localStorage.getItem("lestaches") ?? '[]');
      tachesTmp.forEach((element: any) => {
        if (element.id == this.routeActivated.snapshot.params['id']) {
          element.titre = this.titre;
          element.contenu = this.contenu;
          element.realise = this.realise;
        }
      });
      localStorage.setItem("lestaches", JSON.stringify(tachesTmp));
      this.route.navigate(['list']);
      this.sweetMessage("Merci!!!", "Modifications faite avec succès", "success");
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
