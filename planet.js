function calculateWeight() {
    let earthWeight = document.getElementById("weight").value;
    let planetSelect = document.getElementById("planet");
    let gravity = planetSelect.value;
    
    if (earthWeight === "" || isNaN(earthWeight) || earthWeight <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid weight!";
        return;
    }
    
    let newWeight = (earthWeight * gravity / 9.81).toFixed(2);    //Calculates the user's weight on a different planet based on Earth's weight and the planet's gravity.
    let planetName = planetSelect.options[planetSelect.selectedIndex].text;     //retrieves the name of the selected planet from the dropdown (planetSelect) to display it in the result.
    
    document.getElementById("result").innerHTML = `Your weight on ${planetName} is: <strong>${newWeight} kg</strong>`;    //This line updates the HTML element with the ID
                                                                                                                         //  "result" to display the calculated weight on the selected planet. 
    
    changeBackground(); // Change background when calculating
}

function changeBackground() {
    let planet = document.getElementById("planet").options[document.getElementById("planet").selectedIndex].text;
    let body = document.body;

    let colors = {
        "Mercury": "#8c8c8c", // Gray
        "Venus": "#cfa17f",   // Brownish Yellow
        "Earth": "#2b65ec",   // Blue
        "Mars": "#c1440e",    // Reddish
        "Jupiter": "#f4a460", // Sandy Brown
        "Saturn": "#e3c57e",  // Light Gold
        "Uranus": "#afeeee",  // Light Blue
        "Neptune": "#4169e1"  // Royal Blue
    };

    body.style.background = colors[planet] || "#282c34"; // Default if not found
}


