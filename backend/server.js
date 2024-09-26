import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";

const port = 9999;
const app = express();
app.use(bodyParser.json());
