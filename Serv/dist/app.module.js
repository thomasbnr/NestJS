"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cars_module_1 = require("./cars/cars.module");
const human_controller_1 = require("./human/human.controller");
const human_service_1 = require("./human/human.service");
const human_module_1 = require("./human/human.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [cars_module_1.CarsModule, human_module_1.HumanModule],
        controllers: [app_controller_1.AppController, human_controller_1.HumanController],
        providers: [app_service_1.AppService, human_service_1.HumanService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map