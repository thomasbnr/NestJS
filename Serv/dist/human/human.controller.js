"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanController = void 0;
const common_1 = require("@nestjs/common");
const human_service_1 = require("./human.service");
let HumanController = class HumanController {
    constructor(Human_Service) {
        this.Human_Service = Human_Service;
    }
    findAll() {
        return this.Human_Service.findAll();
    }
    create_human(new_human) {
        console.log(new_human);
        this.Human_Service.create(new_human);
    }
    delete(name) {
        return this.Human_Service.delete(name);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], HumanController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HumanController.prototype, "create_human", null);
__decorate([
    common_1.Delete(':name'),
    __param(0, common_1.Param('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HumanController.prototype, "delete", null);
HumanController = __decorate([
    common_1.Controller('human'),
    __metadata("design:paramtypes", [human_service_1.HumanService])
], HumanController);
exports.HumanController = HumanController;
//# sourceMappingURL=human.controller.js.map