import express from 'express';
import { after, before, describe, it } from 'mocha';
import { expect } from 'chai';
import routes from '../src/routes.js';

const API_URL = "http://localhost:3000/api/v1";
const app = express();
/**
 * @type {import('node:http').Server}
*/
let server;

describe("REST API routes", () => {
    before(() => {
        app.use('/api/v1', routes);
        server = app.listen(3000, () => {});
    });
    it("can get response", async () => {
        const response = await fetch(`${API_URL}/`);
        expect(response.ok).to.be.true;
    });
    it("should convert RGB to HEX correctly", async () => {
        const response = await fetch(`${API_URL}/rgb-to-hex?red=255&green=136&blue=0`);
        const text = await response.text();
        expect(text).to.equal("#ff8800");

    });
    it("should convert HEX to RGB correctly", async () => {
        const response = await fetch(`${API_URL}/hex-to-rgb?hex=%23ff8800`)
        const text = await response.text();
        const json = JSON.parse(text);

        const expected = [255, 136, 0];
        expect(json).to.deep.equal(expected);

    });
    after((done) => {
        server.close(() => done());
    });
})