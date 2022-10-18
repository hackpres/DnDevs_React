

const playCard = (cardData, bossHealth, playerHealth) => {
    switch (cardData.modifier) {
        case "-":
            return {
                playerHealth: playerHealth,
                bossHealth: bossHealth - cardData.value,
                logContent: `Player hit Boss for ${cardData.value} damage!`
            }
            // subtract from boss
        case "+-":
            return {
                playerHealth: playerHealth + cardData.value,
                bossHealth: bossHealth - cardData.value2,
                logContent: `Player hit Boss for ${cardData.value} damage && healed ${cardData.value} health!`
            }
            // add to player && subtract from boss
        case "--":  
            return {
                playerHealth: playerHealth - cardData.value2,
                bossHealth: bossHealth - cardData.value,
                logContent: `Player hit Boss for ${cardData.value} damage && took ${cardData.value2} recoil damage!`
            }
            // subtract from player && boss
        case "-+":
            return {
                playerHealth: playerHealth + cardData.value2,
                bossHealth: bossHealth - cardData.value,
                logContent: `Player hit self for ${cardData.value} damage && healed boss for ${cardData.value} health!`
            }
            // subtract from player && add to boss
        case "++":
            return {
                playerHealth: playerHealth + cardData.value,
                bossHealth: bossHealth - cardData.value2,
                logContent: `Player healed Boss for ${cardData.value} damage && self for ${cardData.value} health!`
            }
            // add to player && boss
        case "=":
            return {
                playerHealth: cardData.value,
                bossHealth: bossHealth,
                logContent: `Player health set to ${cardData.value} `
            }
            // sets player health to value
        case "==":
            return {
                playerHealth: cardData.value,
                bossHealth: cardData.value2,
                logContent: `Player health set to ${cardData.value} && boss health set to ${cardData.value}!`
            }
        default:
            return {
                playerHealth: playerHealth + cardData.value,
                bossHealth: bossHealth,
                logContent: `Player healed for ${cardData.value}!`
            }
            // add to player
        }
}

export default playCard