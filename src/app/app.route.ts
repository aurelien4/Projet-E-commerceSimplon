import { Routes } from '@angular/router';
import { ProductComponent } from './productPage/product.component';
import { ProductListComponent } from './productPage/productlist.component';
import { PurchaseComponent } from './purchasePage/purchase.component';
import { } from './form/form.component';
import { PageNotFound } from './PageNotFound.component';
/*
On définit ici les différentes routes de notre application
Chaque route va avoir un path (une url) et un component qui lui sera 
associé.
On peut lancer des redirections sur certains path en utilisant redirectTo avec
le path de redirection comme argument
On utilise le path '**' pour assigner un comportement à un path qui ne matcherait
aucun de ceux que nous avons définis (typiquement pour un 404)
*/

export const routes:Routes = [
    {path: 'listArticles', component:ProductListComponent},
    {path: '', redirectTo: 'listArticles', pathMatch:'full'},
    {path: 'article', component:ProductComponent},
    {path: 'purchasePage', component:PurchaseComponent},
    {path: '**', component:PageNotFound}
];