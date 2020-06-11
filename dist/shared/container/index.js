"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
require("@modules/users/providers");
require("./providers");
var AppointmentsRepository_1 = __importDefault(require("@modules/appointments/infra/typeorm/repositories/AppointmentsRepository"));
var UsersRepository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UsersRepository"));
var UserTokensRepository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UserTokensRepository"));
var NotificationsRepository_1 = __importDefault(require("@modules/notifications/infra/typeorm/repositories/NotificationsRepository"));
tsyringe_1.container.registerInstance('UsersRepository', tsyringe_1.container.resolve(UsersRepository_1.default));
tsyringe_1.container.registerInstance('AppointmentsRepository', tsyringe_1.container.resolve(AppointmentsRepository_1.default));
tsyringe_1.container.registerInstance('UserTokensRepository', tsyringe_1.container.resolve(UserTokensRepository_1.default));
tsyringe_1.container.registerInstance('NotificationsRepository', tsyringe_1.container.resolve(NotificationsRepository_1.default));
