document.addEventListener('DOMContentLoaded', () => {
  const hexInput = document.getElementById('hexInput');
  const rgbInput = document.getElementById('rgbInput');
  const colorDisplay = document.getElementById('colorDisplay');

  hexInput.addEventListener('input', async () => {
    const hexValue = hexInput.value.trim();
    if (isValidHex(hexValue)) {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/hex-to-rgb?hex=${encodeURIComponent(hexValue)}`);
        if (response.ok) {
          const [red, green, blue] = await response.json();
          rgbInput.value = `${red}, ${green}, ${blue}`; 
          colorDisplay.style.backgroundColor = hexValue; 
        } else {
          throw new Error('Failed to fetch RGB values');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }      
    } else {
      rgbInput.value = ''; 
      colorDisplay.style.backgroundColor = ''; 
    }
  });

  rgbInput.addEventListener('input', async () => {
    const rgbValue = rgbInput.value.trim();
    const [red, green, blue] = rgbValue.split(',').map(component => parseInt(component.trim()));
    if (isValidRGB(red, green, blue)) {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/rgb-to-hex?red=${red}&green=${green}&blue=${blue}`);
        if (response.ok) {
          const hexValue = await response.text();
          hexInput.value = hexValue; 
          colorDisplay.style.backgroundColor = hexValue; 
        } else {
          throw new Error('Failed to fetch HEX value');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }      
    } else {
      hexInput.value = ''; 
      colorDisplay.style.backgroundColor = ''; 
    }
  });

  function isValidHex(hexValue) {
    return /^#?([0-9A-F]{3}){1,2}$/i.test(hexValue);
  }

  function isValidRGB(red, green, blue) {
    return red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255;
  }
});
