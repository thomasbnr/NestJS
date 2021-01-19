import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { HumanService } from './human.service';
import { Humain } from './Humain/humain';
import { normalize } from 'path';

@Controller('human')
export class HumanController {
    constructor (private readonly Human_Service : HumanService) {}
    @Get()
    findAll(): Humain[] {
        return this.Human_Service.findAll();
    }
    @Post()
    create_human(@Body() new_human) {
        console.log(new_human);
        this.Human_Service.create(new_human);
    }
    @Delete(':name')
    delete(@Param('name') name: string ) {  
        return this.Human_Service.delete(name);
    }
}