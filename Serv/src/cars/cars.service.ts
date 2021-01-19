import { Injectable } from '@nestjs/common';
import { Voiture } from './Voiture/voiture';

@Injectable()

// Création de mes objects de type Voiture 
export class CarsService {
     Voitures: Voiture[] = [
        {
        id : 1,
        categorie : "Berline",
        marque : "BMW",
        couleur : "Noir",
        puissance : 300,
        nbr_portes : 3
        },
        {
        id : 2,
        categorie : "Sportive",
        marque : "Peugeot",
        couleur : "Bleue",
        puissance : 380,
        nbr_portes : 5
        },
        {
        id : 3,
        categorie : "Super Sportive",
        marque : "Lamborghini",
        couleur : "Rouge",
        puissance : 600,
        nbr_portes : 2
        }
    ];
    // Méthode get
    findAll(): Voiture[]{
        return this.Voitures;
    }

    // Méthode post
    create(voiture: Voiture) {
       this.Voitures = [...this.Voitures, voiture];
    }

    // Suppression par id 

    delete(id:string) {
        (this.Voitures = [...this.Voitures.filter(v => v.id !== +id)])
         // Cast l'id en num et regarde s'il est différent de celui en argument 
    }
    
}