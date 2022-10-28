"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// create route object
var express_1 = __importDefault(require("express"));
// Import routes
var images_1 = __importDefault(require("./api/images"));
var routes = express_1.default.Router();
// API route
routes.get('/', function (req, res) {
    res.send('main api route');
});
// Images route
routes.use('/images', images_1.default);
exports.default = routes;
