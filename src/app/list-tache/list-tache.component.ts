import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-tache',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './list-tache.component.html',
  styleUrl: './list-tache.component.css'
})
export class ListTacheComponent implements OnInit {
  // Attributs
  public searchInput = "";
  public filtreInput = "tout";
  public searchResult: any[] = [];
  public lestaches: any[] = [];
  public lesTachesParDefaut = [
    {
      id: 1,
      titre: "Concevoir un nouveau logo",
      contenu: "Exploration de concepts créatifs pour le logo de la marque.",
      realise: false
    },
    {
      id: 2,
      titre: "Optimiser la navigation mobile",
      contenu: "Adaptation de l'interface pour une expérience mobile conviviale.",
      realise: true
    },
    {
      id: 3,
      titre: "Créer une stratégie de marketing",
      contenu: "Élaboration d'une stratégie complète pour accroître la visibilité en ligne.",
      realise: false
    },
    {
      id: 4,
      titre: "Développer une fonction de recherche",
      contenu: "Intégration d'une fonction de recherche avancée pour améliorer l'expérience utilisateur.",
      realise: true
    },
    {
      id: 5,
      titre: "Tester les scénarios d'utilisation",
      contenu: "Exécution de scénarios de test pour identifier les points d'amélioration.",
      realise: true
    }
  ];


  // Methodes
  ngOnInit(): void {
    if (localStorage.getItem("lestaches") == null || localStorage.getItem("lestaches") == undefined) {
      localStorage.setItem("lestaches", JSON.stringify(this.lesTachesParDefaut));
    }
    this.lestaches = JSON.parse(localStorage.getItem("lestaches") ?? '[]');
    this.searchResult = JSON.parse(localStorage.getItem("lestaches") ?? '[]');
  }

  supression(id: any) {
    Swal.fire({
      title: "Etes-vous sûr?",
      text: "La supreesion est irréversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui",
      cancelButtonText: "Non"
    }).then((result) => {
      if (result.isConfirmed) {
        // alert(id)
        let tachesTmp = JSON.parse(localStorage.getItem("lestaches") ?? '[]');
        // ici je recherche l'index de l'element que je veux supprimer
        tachesTmp.forEach((element: any) => {
          if (element.id == id) {
            // une fois que je trouve l'index de l'element à supprimer je le passe à methode splice qui se charge de le supprimer
            tachesTmp.splice(tachesTmp.indexOf(element), 1);
          }

        });
        localStorage.setItem("lestaches", JSON.stringify(tachesTmp));
        this.lestaches = JSON.parse(localStorage.getItem("lestaches") ?? '[]');
        this.searchResult = JSON.parse(localStorage.getItem("lestaches") ?? '[]');
        

        Swal.fire({
          title: "Supprimé!",
          text: "Suppression faite avec succès",
          icon: "success"
        });
      }
    });
  }

  search() {
    this.searchResult = [];
    this.lestaches.forEach((element: any) => {
      if (element.titre.toLowerCase().includes(this.searchInput.toLowerCase())) {
        this.searchResult.push(element);
      }
    });

  }

  // la fonction qui filtre par tâche réalisée ou non réalisée
  filtre() {
    this.searchResult = [];
    let bool = true;
    if (this.filtreInput == "true") {
      bool = true;
    } else if (this.filtreInput == "false") {
      bool = false;
    }else{
      this.lestaches.forEach((element:any) => {
        this.searchResult.push(element);
      });
      return;

    }
    this.lestaches.forEach((element: any) => {
      if (element.realise == bool) {
        this.searchResult.push(element);
      }
    });
    // alert(this.filtreInput)
  }
}
