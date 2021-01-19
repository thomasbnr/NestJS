import { Injectable } from '@nestjs/common';
import { normalize } from 'path';
import { stringify } from 'querystring';
import { Humain } from './Humain/humain';

@Injectable()
export class HumanService {
    Human: Humain [] = [
        {
        id: 1,
        name: "Paul",
        sexe : "Homme",
        age : 21,
        pcs : "Etdiant ",
        fav_food : "KFC"
        },
        {
        id: 2,
        name: "Marie",
        sexe : "Femme",
        age : 26,
        pcs : "PDG ",
        fav_food : "Mcdo"
        },
        {
        id: 3,
        name: "Olivier",
        sexe : "Homme",
        age : 41,
        pcs : "Avocat ",
        fav_food : "Salade"
        }
    ]
    findAll() : Humain[]{
        return this.Human
    }
    create(new_humain : Humain) {
        this.Human = [...this.Human,new_humain];
    }
    delete(name:String) {
        this.Human = [...this.Human.filter(h => h.name !== name)]; 
    }

}
