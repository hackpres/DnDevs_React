

const playCard = (cardData, bossHealth, playerHealth) => {
    switch (cardData.modifier) {
        case "-":
            return {
                playerHealth: playerHealth,
                bossHealth: bossHealth - cardData.value[0]
            }
            // subtract from boss
        case "+-":
            return {
                playerHealth: playerHealth + cardData.value[0],
                bossHealth: bossHealth - cardData.value[1]
            }
            // add to player && subtract from boss
        case "--":  
            return {
                playerHealth: playerHealth - cardData.value[1],
                bossHealth: bossHealth - cardData.value[0]
            }
            // subtract from player && boss
        case "-+":
            return {
                playerHealth: playerHealth + cardData.value[1],
                bossHealth: bossHealth - cardData.value[0]
            }
            // subtract from player && add to boss
        case "++":
            return {
                playerHealth: playerHealth + cardData.value[0],
                bossHealth: bossHealth - cardData.value[1]
            }
            // add to player && boss
        default:
            return {
                playerHealth: playerHealth + cardData.value[0],
                bossHealth: bossHealth
            }
            // add to player
        }
}

export default playCard