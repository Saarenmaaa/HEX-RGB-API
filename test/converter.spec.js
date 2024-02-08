import { describe, it } from "mocha";
import { expect } from "chai";
import { rgb_to_hex, hex_to_rgb } from "../src/converter.js"

describe("RGB-to-HEX Converter", () => {
    it("is a function", () => {
        expect(rgb_to_hex).to.be.an('Function');
    });
    it("should return a string", () => {
        expect(rgb_to_hex(0, 0, 0)).to.be.an('string');
    });
    it("first character is a hashtag", () => {
        expect(rgb_to_hex(0, 0, 0)[0]).to.equal("#");
    });
    it("should convert RED value correctly", () => {
        expect(rgb_to_hex(  0,   0,  0).substring(0, 3)).to.equal("#00");
        expect(rgb_to_hex(255,   0,  0).substring(0, 3)).to.equal("#ff");
        expect(rgb_to_hex(136,   0,  0).substring(0, 3)).to.equal("#88");
        expect(rgb_to_hex(1000,  0,  0).substring(0, 3)).to.not.equal("#12");
    });
    it("should convert GREEN value correctly", () => {
        expect(rgb_to_hex(  0,  0,  0).substring(3, 5)).to.equal("00");
        expect(rgb_to_hex(  0,255,  0).substring(3, 5)).to.equal("ff");
        expect(rgb_to_hex(  0,136,  0).substring(3, 5)).to.equal("88");
        expect(rgb_to_hex(  0,100,  0).substring(3, 5)).to.not.equal("12");
    });
    it("should convert BLUE value correctly", () => {
        expect(rgb_to_hex(  0,  0,  0).substring(5, 7)).to.equal("00");
        expect(rgb_to_hex(  0,  0,255).substring(5, 7)).to.equal("ff");
        expect(rgb_to_hex(  0,  0,136).substring(5, 7)).to.equal("88");
        expect(rgb_to_hex(  0,  0,100).substring(5, 7)).to.not.equal("12");
    });
    it("should convert RGB-to-HEX value correctly", () => {
        expect(rgb_to_hex(255,  0,  0)).to.equal("#ff0000");
        expect(rgb_to_hex(  0,255,  0)).to.equal("#00ff00");
        expect(rgb_to_hex(  0,  0,255)).to.equal("#0000ff");
        expect(rgb_to_hex(255,136,  0)).to.equal("#ff8800");
    });
});

describe("HEX-to-RGB Converter", () => {
    it("is a function", () => {
        expect(hex_to_rgb).to.be.an('Function');
    });
    it("should return a array", () => {
        expect(hex_to_rgb("#ff00ff")).to.be.an('array');
    });
    it("should convert RED HEX correctly", () => {
        expect(hex_to_rgb("#000000")[0]).to.equal(0);
        expect(hex_to_rgb("#ff0000")[0]).to.equal(255);
        expect(hex_to_rgb("#880000")[0]).to.equal(136);
        expect(hex_to_rgb("#12ffff")[0]).to.not.equal(1000);
    });
    it("should convert GREEN HEX correctly", () => {
        expect(hex_to_rgb("#000000")[1]).to.equal(0);
        expect(hex_to_rgb("#00ff00")[1]).to.equal(255);
        expect(hex_to_rgb("#008800")[1]).to.equal(136);
        expect(hex_to_rgb("#ff12ff")[1]).to.not.equal(1000);
    });    it("should convert BLUE HEX correctly", () => {
        expect(hex_to_rgb("#000000")[2]).to.equal(0);
        expect(hex_to_rgb("#0000ff")[2]).to.equal(255);
        expect(hex_to_rgb("#000088")[2]).to.equal(136);
        expect(hex_to_rgb("#ffff12")[2]).to.not.equal(1000);
    });
    it("should convert HEX-to-RGB value correctly", () => {
        expect(hex_to_rgb("#ff0000")).to.deep.equal([255, 0, 0]);
        expect(hex_to_rgb("#00ff00")).to.deep.equal([0, 255, 0]);
        expect(hex_to_rgb("#0000ff")).to.deep.equal([0, 0, 255]);
        expect(hex_to_rgb("#ff8800")).to.deep.equal([255, 136, 0]);
    });
});