import express from "express";
import cors from "cors";

const server = express();
const port = 9000;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
