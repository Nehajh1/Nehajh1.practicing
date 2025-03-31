const leaderboard = [
    { firstName: "Asabeneh", lastName: "Yetayeh", country: "Finland", score: 85 },
    { firstName: "John", lastName: "Doe", country: "USA", score: 75 },
    { firstName: "Jane", lastName: "Smith", country: "Canada", score: 90 }
];

function displayLeaderboard() {
    const board = document.getElementById("leaderboard");
    board.innerHTML = ""; // Clear previous list

    // Sort by highest score
    leaderboard.sort((a, b) => b.score - a.score);

    leaderboard.forEach((player, index) => {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player-card");

        const playerInfo = document.createElement("div");
        playerInfo.classList.add("player-info");
        playerInfo.textContent = `${player.firstName} ${player.lastName} - ${player.country} - ${player.score} pts`;

        // Buttons for actions
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        const increaseBtn = document.createElement("button");
        increaseBtn.textContent = "+5";
        increaseBtn.classList.add("increase");
        increaseBtn.onclick = () => updateScore(index, 5);

        const decreaseBtn = document.createElement("button");
        decreaseBtn.textContent = "-5";
        decreaseBtn.classList.add("decrease");
        decreaseBtn.onclick = () => updateScore(index, -5);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.classList.add("remove");
        removeBtn.onclick = () => removeParticipant(index);

        buttonsDiv.appendChild(increaseBtn);
        buttonsDiv.appendChild(decreaseBtn);
        buttonsDiv.appendChild(removeBtn);

        playerDiv.appendChild(playerInfo);
        playerDiv.appendChild(buttonsDiv);
        board.appendChild(playerDiv);
    });
}

function addParticipant() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const country = document.getElementById("country").value.trim();
    const score = parseInt(document.getElementById("score").value);

    if (!firstName || !lastName || !country || isNaN(score)) {
        alert("Please enter valid details!");
        return;
    }

    leaderboard.push({ firstName, lastName, country, score });

    // Clear input fields
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("country").value = "";
    document.getElementById("score").value = "";

    displayLeaderboard();
}

function updateScore(index, value) {
    leaderboard[index].score += value;
    displayLeaderboard();
}

function removeParticipant(index) {
    leaderboard.splice(index, 1);
    displayLeaderboard();
}

// Initial render
displayLeaderboard();
