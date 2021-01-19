"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanService = void 0;
const common_1 = require("@nestjs/common");
let HumanService = class HumanService {
    constructor() {
        this.Human = [
            {
                id: 1,
                name: "Paul",
                sexe: "Homme",
                age: 21,
                pcs: "Etdiant ",
                fav_food: "KFC"
            },
            {
                id: 2,
                name: "Marie",
                sexe: "Femme",
                age: 26,
                pcs: "PDG ",
                fav_food: "Mcdo"
            },
            {
                id: 3,
                name: "Olivier",
                sexe: "Homme",
                age: 41,
                pcs: "Avocat ",
                fav_food: "Salade"
            }
        ];
    }
    findAll() {
        return this.Human;
    }
    create(new_humain) {
        this.Human = [...this.Human, new_humain];
    }
    delete(name) {
        this.Human = [...this.Human.filter(h => h.name !== name)];
    }
};
HumanService = __decorate([
    common_1.Injectable()
], HumanService);
exports.HumanService = HumanService;
//# sourceMappingURL=human.service.js.map