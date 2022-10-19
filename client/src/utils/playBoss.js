

const playBoss = (bossData, modifier, bossHealth, playerHealth) => {
    const value = bossData.attack;
    const value2 = bossData.heal;
    console.log(bossData.attack);
    switch (modifier) {
        case '-':
            return {
                playerHealth: parseInt(playerHealth - value),
                bossHealth: bossHealth,
                logContent: `Boss hit player for ${value}`
            }
        case '-=':
            return {
                playerHealth: parseInt(playerHealth - ( value * 2 )),
                bossHealth: bossHealth,
                logContent: `Boss landed critical hit! ${value * 2} damage to player.`
            }
        case '+':
            return {
                playerHealth: playerHealth,
                bossHealth: parseInt(bossHealth + value2),
                logContent: `Boss healed ${value2} health.`
            }
        case '--':
            return {
                playerHealth: parseInt(playerHealth - ( value * 1.5 )),
                bossHealth: parseInt(bossHealth - ( value * .5 )),
                logContent: `AOE attack!! Player hit for ${value * 1.5}. Boss hit for ${value * .5}.`
            }
        default:
            return {
                playerHealth: playerHealth,
                bossHealth: bossHealth,
                logContent: `Boss attack missed!`
            }
    }
}

export default playBoss;