/**
 * Padding hex component if necessary.
 * Hex component representation requires
 * two hexadecimal characters.
 * @param {string} comp
 * @return {string} two hexadecimal characters.
 */
const pad = (comp) => {
    let padded = comp.length == 2 ? comp : "0" + comp;
    return padded;
};

/**
 * RGB-to-HEX conversion
 * @param {number} RED 0-255 
 * @param {number} GREEN 0-255 
 * @param {number} BLUE 0-255 
 * @returns {string} in hex color format, e.g., "#00ff00" (green)
 */
export const rgb_to_hex = (r, g, b) => {
    const HEX_RED = r.toString(16);
    const HEX_GREEN = g.toString(16);
    const HEX_BLUE = b.toString(16);
    return "#" + pad(HEX_RED) + pad(HEX_GREEN) + pad(HEX_BLUE);
};

/**
 * HEX-to-RGB conversion
 * @param {String} Hexcode #20ff22
 * @returns {Array<number>} Hexcode to rgb array.
 */
export const hex_to_rgb = (hex) => {
    const RGB_RED = parseInt(hex.substring(1, 3), 16);
    const RGB_GREEN = parseInt(hex.substring(3, 5), 16);
    const RGB_BLUE = parseInt(hex.substring(5, 7), 16);
    return [RGB_RED, RGB_GREEN, RGB_BLUE];
};