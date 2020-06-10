"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    driver: process.env.MAIL_DRIVER || 'ethereal',
    defaults: {
        from: {
            email: process.env.MAIL_FROM_EMAIL,
            name: 'Michael from GoBarber',
        },
    },
};