const {Client, GatewayIntentBits, PermissionsBitField} = require('discord.js');
const {Guilds, GuildMessages, MessageContent} = GatewayIntentBits;
const { token } = require('./config.json');

const client = new Client({ intents: [Guilds, GuildMessages, MessageContent]});

client.login(token);

client.on('ready', () => {
    console.log(`${client.user.tag} 준비 완료!`);
    client.user.setPresence({ activities: { name: "싸고 괜찮은 전담 구매는? 이노베이프!" }, status: "online"})
});

client.on('messageCreate', (msg) => {
    const cmd = msg.content;

    if (cmd === 'ㅎㅇ')
        msg.reply("싫어요.");
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName} = interaction;

    switch (commandName) {
        case 'ping':
            await interaction.reply("Pong이다.");
            break;
        case 'pong':
            await interaction.reply("Ping이다.");
            break;
        case 'admin-reset':
            console.log(interaction.user);
            // if (. .has([PermissionsBitField.Flags.Administrator])) {
            //     interaction.reply("삭제.")
            // } else {
            //     interaction.reply("삭제 실패!");
            // }
            break;
        default:
            await interaction.reply("잘못된 명령어입니다!");
            break;
    }
})
