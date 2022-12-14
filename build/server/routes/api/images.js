"use strict";
/*** --- Steps to create route --- ***/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// STEP 1 : Import Express
var express_1 = __importDefault(require("express"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var validateInputs_1 = __importDefault(require("../../utilites/validateInputs"));
var resizeImage_1 = __importDefault(require("../../utilites/resizeImage"));
// STEP 2 : use router function from express
var images = express_1.default.Router();
// STEP 3 : create route functionality
images.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var image, imageHeight, imageWidth, queryHasImage, queryHasHeight, queryHasWidth, currentDir, fullImagesDir, thumbImagesDir, imagePathFull, imagePathThumb, validHeight, validWidth, resizedImage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                image = req.query.image;
                imageHeight = Number(req.query.height);
                imageWidth = Number(req.query.width);
                queryHasImage = 'image' in req.query;
                queryHasHeight = 'height' in req.query;
                queryHasWidth = 'width' in req.query;
                currentDir = __dirname;
                fullImagesDir = '../../../../assets/images/full';
                thumbImagesDir = '../../../../assets/images/thumb';
                imagePathFull = path_1.default.join(currentDir, fullImagesDir);
                imagePathThumb = path_1.default.join(currentDir, thumbImagesDir);
                if (!queryHasImage) return [3 /*break*/, 11];
                if (!fs_extra_1.default.existsSync("".concat(imagePathFull, "/").concat(image, ".jpg"))) return [3 /*break*/, 9];
                if (!fs_extra_1.default.existsSync("".concat(imagePathThumb, "/").concat(image, "_").concat(imageHeight, "_").concat(imageWidth, ".jpg"))) return [3 /*break*/, 1];
                res.sendFile("".concat(imagePathThumb, "/").concat(image, "_").concat(imageHeight, "_").concat(imageWidth, ".jpg"));
                return [3 /*break*/, 8];
            case 1:
                if (!(queryHasHeight && queryHasWidth)) return [3 /*break*/, 7];
                validHeight = (0, validateInputs_1.default)(imageHeight);
                validWidth = (0, validateInputs_1.default)(imageWidth);
                if (!(validHeight && validWidth)) return [3 /*break*/, 5];
                if (!(imageHeight && imageWidth >= 1)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, resizeImage_1.default)(image, imageWidth, imageHeight)];
            case 2:
                resizedImage = _a.sent();
                // Sending the resized image to the browser
                try {
                    res.sendFile(resizedImage);
                }
                catch (error) {
                    console.error(error);
                }
                return [3 /*break*/, 4];
            case 3:
                console.log('The values of width and height must be a positive numbers');
                res.send('The values of width and height must be a positive numbers');
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                console.error('Please input correct Image height and width values ');
                res.send('Please input correct Image height and width values ');
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                if (queryHasHeight || queryHasWidth) {
                    console.log('Image width and height values both are required for image resizing');
                    res.send('Image width and height values both are required for image resizing');
                }
                else {
                    res.sendFile("".concat(imagePathFull, "/").concat(image, ".jpg"));
                }
                _a.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                console.error('Image not found');
                res.status(404).send('Image not found');
                _a.label = 10;
            case 10: return [3 /*break*/, 12];
            case 11:
                console.error('Image name missing : Please input the image name to complete the process');
                res.send('Image name missing : Please input the image name to complete the process');
                _a.label = 12;
            case 12: return [2 /*return*/];
        }
    });
}); });
// STEP 4 : export route
exports.default = images;
