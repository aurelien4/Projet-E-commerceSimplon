import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<router-outlet>
          <a routerLink="/article"> Articles </a>
          <a routerLink="/purchasePage"> Panier </a>
          <a routerLink="/listArticles"> Liste des articles </a>
          <a routerLink="/FormComponent"> login</a>
          </router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce';
  intro = 'Bienvenu sur le site de l\'atelier angular4 de simplon';
}
