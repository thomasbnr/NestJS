import { Voiture } from './Voiture/voiture';
export declare class CarsService {
    Voitures: Voiture[];
    findAll(): Voiture[];
    create(voiture: Voiture): void;
    delete(id: string): void;
}
