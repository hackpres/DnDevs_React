

const playBoss = (bossAction, modifier, bossHealth, playerHealth) => {
    const value = bossAction.attack;
    const value2 = bossAction.heal;
    switch (modifier) {
        case '-':
            return {
                playerHealth: playerHealth - value,
                bossHealth: bossHealth,
                logContent: `Boss hit player for ${value}`
            }
        case '-=':
            return {
                playerHealth: playerHealth - ( value * 2 ),
                bossHealth: bossHealth,
                logContent: `Boss landed critical hit! ${value * 2} damage to player.`
            }
        case '+':
            return {
                playerHealth: playerHealth,
                bossHealth: bossHealth + value2,
                logContent: `Boss healed ${value2} health.`
            }
        case '--':
            return {
                playerHealth: playerHealth - ( value * 1.5 ),
                bossHealth: bossHealth - ( value * .5 ),
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