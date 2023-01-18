"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", false);
mongoose_1.default.connect(process.env.DB_URL);
const db = mongoose_1.default.connection;
db.on("error", (error) => console.log("DB Error", error));
db.once("open", () => console.log("✅ Connected to DB"));
