
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../app.component';
import { RouterModule } from "@angular/router/router";
import { routes } from "app/app.route";
import { FormComponent } from "app/form/form.component";


@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [    
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class formModule{
    
};