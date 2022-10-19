

const playBoss = (bossData, modifier, bossHealth, playerHealth, playerName) => {
    const value = bossData.attackl;
    const value2 = bossData.heal;
    const bossName = bossData.name;
    switch (modifier) {
        case '-':
            return {
                playerHealth: parseInt(playerHealth - value),
                bossHealth: bossHealth,
                logContent: `${bossName} hit ${playerName} for ${value}`
            }
        case '-=':
            return {
                playerHealth: parseInt(playerHealth - ( value * 2 )),
                bossHealth: bossHealth,
                logContent: `${bossName} landed critical hit! ${value * 2} damage to ${playerName}.`
            }
        case '+':
            return {
                playerHealth: playerHealth,
                bossHealth: parseInt(bossHealth + value2),
                logContent: `${bossName} healed ${value2} health.`
            }
        case '--':
            return {
                playerHealth: parseInt(playerHealth - ( value * 1.5 )),
                bossHealth: parseInt(bossHealth - ( value * .5 )),
                logContent: `AOE attack!! ${playerName} hit for ${value * 1.5}. ${bossName} hit for ${value * .5}.`
            }
        default:
            return {
                playerHealth: playerHealth,
                bossHealth: bossHealth,
                logContent: `${bossName} attack missed!`
            }
    }
}

export default playBoss;