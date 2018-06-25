const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});
client.on("ready", function () {
        client.user.setGame(games'Black Screen' , 'https://www.twitch.tv/browjo6');     
  });
client.login(process.env.BOT_TOKEN);
