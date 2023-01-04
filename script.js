function createNewField(size=16) {
    const gameParent = document.querySelector("#game-anchor");

    for(let i = 0; i < size; i++) {
        const row = document.createElement("div");
        for(let j = 0; j < size; j++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            row.appendChild(tile);
        }
        row.classList.add("row");
        gameParent.appendChild(row);
    }
}