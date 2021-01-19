"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
let CarsService = class CarsService {
    constructor() {
        this.Voitures = [
            {
                id: 1,
                categorie: "Berline",
                marque: "BMW",
                couleur: "Noir",
                puissance: 300,
                nbr_portes: 3
            },
            {
                id: 2,
                categorie: "Sportive",
                marque: "Peugeot",
                couleur: "Bleue",
                puissance: 380,
                nbr_portes: 5
            },
            {
                id: 3,
                categorie: "Super Sportive",
                marque: "Lamborghini",
                couleur: "Rouge",
                puissance: 600,
                nbr_portes: 2
            }
        ];
    }
    findAll() {
        return this.Voitures;
    }
    create(voiture) {
        this.Voitures = [...this.Voitures, voiture];
    }
    delete(id) {
        (this.Voitures = [...this.Voitures.filter(v => v.id !== +id)]);
    }
};
CarsService = __decorate([
    common_1.Injectable()
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map