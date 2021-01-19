import { HumanService } from './human.service';
import { Humain } from './Humain/humain';
export declare class HumanController {
    private readonly Human_Service;
    constructor(Human_Service: HumanService);
    findAll(): Humain[];
    create_human(new_human: any): void;
    delete(name: string): void;
}
