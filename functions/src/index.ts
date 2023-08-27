import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {convertImage} from "./services/convertion";
import express = require("express");
import bodyParser = require("body-parser");

const apiApp = express()
  .use(bodyParser.json());

apiApp.post("/convert", async (req, res) => {
  const {image} = req.body;

  logger.info(image);
  const prediction = await convertImage(image);
  logger.info(prediction);

  res.json({prediction});
});

apiApp.get("/ping", async (req, res) => {
  res.json("pong");
});

export const api = onRequest({cors: true, timeoutSeconds: 120}, apiApp);
