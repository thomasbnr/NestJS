import { CarsService } from './cars.service';
import { Voiture } from './Voiture/voiture';
export declare class CarsController {
    private readonly Voiture_service;
    constructor(Voiture_service: CarsService);
    findAll(): Voiture[];
    createVoiture(new_cars: any): void;
    delete(id: string): void;
}
