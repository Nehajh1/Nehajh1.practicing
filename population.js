const populationData = [
    { country: "China", population: 1444216107 },
    { country: "India", population: 1393409038 },
    { country: "USA", population: 332915073 },
    { country: "Indonesia", population: 276361783 },
    { country: "Pakistan", population: 225199937 },
    { country: "Brazil", population: 213993437 },
    { country: "Nigeria", population: 206139589 },
    { country: "Bangladesh", population: 166303498 },
    { country: "Russia", population: 143932377 },
    { country: "Mexico", population: 126014024 }
];

const languageData = [
    { language: "English", speakers: 1500000000 },
    { language: "Mandarin Chinese", speakers: 1120000000 },
    { language: "Hindi", speakers: 600000000 },
    { language: "Spanish", speakers: 559000000 },
    { language: "French", speakers: 310000000 },
    { language: "Arabic", speakers: 274000000 },
    { language: "Bengali", speakers: 273000000 },
    { language: "Portuguese", speakers: 260000000 },
    { language: "Russian", speakers: 258000000 },
    { language: "Urdu", speakers: 230000000 }
];

function showPopulation() {            //it will display a chart of populated countries.
    document.getElementById("chart-title").textContent = "Top 10 Most Populated Countries";
    renderChart(populationData, "population");          //function dynamically updates the bars based on the selected dataset.
}

function showLanguages() {
    document.getElementById("chart-title").textContent = "Top 10 Most Spoken Languages";
    renderChart(languageData, "speakers");
}

function renderChart(data, key) {
    const chart = document.getElementById("chart");
    chart.innerHTML = ""; // Clear previous chart

    const maxValue = Math.max(...data.map(item => item[key])); // Find max value for scaling

    data.forEach(item => {        //This loop iterates over the data array, where each item represents an individual data object (like a country or language, depending on the context).
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.width = (item[key] / maxValue) * 100 + "%";

        const label = document.createElement("span");
        label.classList.add("label");
        label.textContent = item.country || item.language;

        const value = document.createElement("span");
        value.classList.add("value");
        value.textContent = item[key].toLocaleString();

        bar.appendChild(label);
        bar.appendChild(value);
        chart.appendChild(bar);
    });
}
