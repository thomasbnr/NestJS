import { Humain } from './Humain/humain';
export declare class HumanService {
    Human: Humain[];
    findAll(): Humain[];
    create(new_humain: Humain): void;
    delete(name: String): void;
}
