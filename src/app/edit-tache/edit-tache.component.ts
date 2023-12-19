import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
export class EditTacheComponent implements OnInit{
 // Attributs
 public titre = "";
 public contenu = "";
 public realise = "";

 // Methodes
 constructor(private route:Router) {

 }
  ngOnInit(): void {

  }
 // la fonction qui ajoute une tâche
 enregister() {
   if (this.titre == "" || this.contenu == "") {
     this.sweetMessage("Désolé!!!", "Veuillez renseigner tous les champs", "error");
   } else {
     let tachesTmp = JSON.parse(localStorage.getItem("lestaches") ?? '[]');
     // incrementation de l'id pour la nouvelle tâche
     let incremandedId=tachesTmp[tachesTmp.length-1].id+1;
     tachesTmp.push({id:incremandedId, titre: this.titre, contenu: this.contenu, realise: this.realise });
     localStorage.setItem("lestaches", JSON.stringify(tachesTmp));
     this.route.navigate(['list']);
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
