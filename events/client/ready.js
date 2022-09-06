const { white, green } = require('chalk');

module.exports = async (client) => {
    await client.manager.init(client.user.id);
    console.log(white('[') + green('INFO') + white('] ') + green(`${client.user.tag} (${client.user.id})`) + white(` is Ready!`));

    let guilds = client.guilds.cache.size;
    let members = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);
    let channels = client.channels.cache.size;

    const activities = [
        `${client.prefix}help | ${guilds} servers`,
        `${client.prefix}play <input> | ${members} users`,
        `${client.prefix}doubletime | ${channels} channels`,
    ]

    setInterval(() => {
        client.user.setPresence({ 
            activities: [{ name: `${activities[Math.floor(Math.random() * activities.length)]}`, type: 2 }], 
            status: 'online', 
        });
    }, 15000)

};
