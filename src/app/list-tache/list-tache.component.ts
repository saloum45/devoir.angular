import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-tache',
  standalone: true,
  imports: [],
  templateUrl: './list-tache.component.html',
  styleUrl: './list-tache.component.css'
})
export class ListTacheComponent implements OnInit {
  // Attributs
  public lestaches:any[]=[];
  public lesTachesParDefaut = [
    {
      title: "Concevoir un nouveau logo",
      contenu: "Exploration de concepts créatifs pour le logo de la marque.",
      realise: false
    },
    {
      title: "Optimiser la navigation mobile",
      contenu: "Adaptation de l'interface pour une expérience mobile conviviale.",
      realise: true
    },
    {
      title: "Créer une stratégie de marketing",
      contenu: "Élaboration d'une stratégie complète pour accroître la visibilité en ligne.",
      realise: false
    },
    {
      title: "Développer une fonction de recherche",
      contenu: "Intégration d'une fonction de recherche avancée pour améliorer l'expérience utilisateur.",
      realise: true
    },
    {
      title: "Tester les scénarios d'utilisation",
      contenu: "Exécution de scénarios de test pour identifier les points d'amélioration.",
      realise: true
    }
  ];


  // Methodes
  ngOnInit(): void {
    localStorage.setItem("lestaches",JSON.stringify(this.lesTachesParDefaut));
    this.lestaches=JSON.parse(localStorage.getItem("lestaches")??'[]');

  }


  supression(){
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
        Swal.fire({
          title: "Supprimé!",
          text: "Suppression faite avec succès",
          icon: "success"
        });
      }
    });
  }
}
