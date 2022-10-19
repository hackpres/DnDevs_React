

const playCard = (cardData, bossHealth, playerHealth, playerName, bossData) => {
    const bossName = bossData.name;
    switch (cardData.modifier) {
        case "-":
            return {
                playerHealth: playerHealth,
                bossHealth: bossHealth - cardData.value,
                logContent: `${playerName} hit ${bossName} for ${cardData.value} damage!`,
            }
            // subtract from boss
        case "+-":
            return {
                playerHealth: playerHealth + cardData.value,
                bossHealth: bossHealth - cardData.value2,
                logContent: `${playerName} hit ${bossName} for ${cardData.value} damage && healed ${cardData.value} health!`
            }
            // add to player && subtract from boss
        case "--":  
            return {
                playerHealth: playerHealth - cardData.value2,
                bossHealth: bossHealth - cardData.value,
                logContent: `${playerName} hit ${bossName} for ${cardData.value} damage && took ${cardData.value2} recoil damage!`
            }
            // subtract from player && boss
        case "-+":
            return {
                playerHealth: playerHealth + cardData.value2,
                bossHealth: bossHealth - cardData.value,
                logContent: `${playerName} hit self for ${cardData.value} damage && healed ${bossName} for ${cardData.value} health!`
            }
            // subtract from player && add to boss
        case "++":
            return {
                playerHealth: playerHealth + cardData.value,
                bossHealth: bossHealth - cardData.value2,
                logContent: `${playerName} healed ${bossName} for ${cardData.value} damage && self for ${cardData.value} health!`
            }
            // add to player && boss
        case "=":
            return {
                playerHealth: cardData.value,
                bossHealth: bossHealth,
                logContent: `${playerName} health set to ${cardData.value} `
            }
            // sets player health to value
        case "==":
            return {
                playerHealth: cardData.value,
                bossHealth: cardData.value2,
                logContent: `${playerName} health set to ${cardData.value} && ${bossName} health set to ${cardData.value}!`
            }
        default:
            return {
                playerHealth: playerHealth + cardData.value,
                bossHealth: bossHealth,
                logContent: `${playerName} healed for ${cardData.value}!`
            }
            // add to player
        }
}

export default playCard