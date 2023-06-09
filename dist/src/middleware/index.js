"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class Middleware {
    handleValidationError(req, res, next) {
        const error = express_validator_1.validationResult(req);
        if (!error.isEmpty()) {
            return res.json(error.array()[0]);
        }
        next();
    }
}
exports.default = new Middleware();
