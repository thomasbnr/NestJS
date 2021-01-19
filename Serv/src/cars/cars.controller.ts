import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Voiture } from './Voiture/voiture';


@Controller('cars')
export class CarsController {
    // J'attribue à Voiture_service les composant de CarsService 
    constructor(private readonly Voiture_service: CarsService ) {}
    @Get()
    findAll(): Voiture[]{
        return this.Voiture_service.findAll();
    }
    @Post()
        createVoiture(@Body() new_cars) {
            console.log('new cars',new_cars);
            this.Voiture_service.create(new_cars);
        }
    @Delete(':id')
    delete(@Param('id') id: string ) {  // id est un string car il est passé dans l'URL
        return this.Voiture_service.delete(id);
    }
}
    
