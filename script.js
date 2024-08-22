function volume_sphere() {
    //Write your code here
	event.preventDefault();
    
    // Get the value of the input field
    const radiusInput = document.getElementById('radius').value;
    
    // Convert the input to a number
    const radius = parseFloat(radiusInput);
    
    // Validate the input: it should be a non-negative number
    if (isNaN(radius) || radius < 0) {
        // Display 'NaN' if input is invalid
        document.getElementById('volume').value = 'NaN';
        return;
    }
    
    // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    // Round the result to 4 decimal places
    const roundedVolume = volume.toFixed(4);
    
    // Display the result
    document.getElementById('volume').value = roundedVolume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
