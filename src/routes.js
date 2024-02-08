import { Router } from "express";
import { rgb_to_hex, hex_to_rgb } from "./converter.js"

const routes = Router();

// Endpoint GET '{{api_url}}'
routes.get('/', (req, res) => res.status(200).send("Welcome!"));

// Endpoint GET /rgb-to-hex?red=255&green=136&blue=0
routes.get('/rgb-to-hex', (req, res) => {
    const RED = parseFloat(req.query.red);
    const GREEN = parseFloat(req.query.green);
    const BLUE = parseFloat(req.query.blue);
    const HEX = rgb_to_hex(RED, GREEN, BLUE);
    res.status(200).send(HEX);
});

// Endpoint GET /hex-to-rgb?hex=%23ff8800
routes.get('/hex-to-rgb', (req, res) => {
    const HEX = req.query.hex;
    const RGB = hex_to_rgb(HEX);
    res.status(200).send(RGB);
});

export default routes;