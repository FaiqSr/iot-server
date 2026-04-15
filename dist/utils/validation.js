"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationService = void 0;
class ValidationService {
    static validate(zodType, data) {
        return zodType.parse(data);
    }
}
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.js.map