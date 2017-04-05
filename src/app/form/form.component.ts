import { Component, OnInit } from '@angular/cli';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
    selector: 'formLogin',
    templateUrl: './form.component.html',
    StylesUrl: ['./form.component.css']
})
export class FormComponent{
    formulaire:FormGroup;
    constructor(private fb:FormBuilder){ }

    ngOnInit(){
        this.formulaire = this.fb.group({
            nom: ['', [Validators.required, ]],
            prenom: ['', [Validators.required,]],
            password: ['', Validators.required],
            password2:['',[Validators.required]],
            adresse: ['', [Validators.required,]],
            portable: ['', [Validators.required]],
            fixe: ['', [Validators.required]],
            DateDeNaissance: ['',[Validators.required]]
        },
        {
            Validator: this.errorPassword
        });
    }
    private errorPassword(){
        if( this.formulaire.get('password').value === this.formulaire.get('password2').value){
            return true;
        }
        return false;
    }
    inscription(){
        /**
         * envoie les données au back office pour vérifications de l'existance des données entré, inscription
         * en cas de retour négatif.
         */
    }
    connexion(){
        /**
         * envoie des données de connexion pour vérifications. return true en cas de connexion reussi.
         */
    }

}