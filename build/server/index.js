"use strict";
// Main imports to run express server
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
// Port number
var port = 3000;
// Middlewaiers
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static('build'));
app.use('src/client/images', express_1.default.static('images'));
app.use('/api', index_1.default);
// Run server
app.listen(port, function () {
    console.log("your server work correctly on port ".concat(port));
});
exports.default = app;
