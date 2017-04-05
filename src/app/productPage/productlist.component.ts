import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'listArticles',
    templateUrl: './productlist.component.html',
    styleUrls: ['./productlist.component.css']
})export class ProductListComponent{
    ngOnInit(){
        //appelle de la base de donnée pour affichier tout la liste.
    }
    ajoutProduit(){
        //Ecoute des boutons produit pour ajouter des produit au pannier.
    }
    passageEnCaise(){
        //ecoute du bouton pannier pour renvoyer sur la page d'achat.
    }
}