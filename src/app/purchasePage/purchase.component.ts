import { Component , OnInit} from "@angular/core";

@Component({
    selector: 'purchasePage',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.css']
})export class PurchaseComponent{

    ngOnInit(){
        //appelle de la base de donnée qui gère les paniers
    }
    purchaseButton(){
        //action en cas de validation de l'achat
    }
}