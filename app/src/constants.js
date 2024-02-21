import path from "path";

import dotenv from "dotenv";
dotenv.config();

//constants for the paths
export const SOURCE_PATH = path.resolve("src");
export const VIEWS_PATH = path.resolve("views");
export const PUBLIC_PATH = path.resolve("public");

//export portnumber
export const PORT = process.env.PORT || 3000;
