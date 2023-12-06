const {SlashCommandBuilder} = require('@discordjs/builders');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v10');
const {clientId, guildId, token} = require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('admin-reset').setDescription("서버 개편을 위한 멤버 역할 초기화 작업을 진행합니다."),
    new SlashCommandBuilder().setName('ping').setDescription("Replies with Pong!!!"),
    new SlashCommandBuilder().setName('pong').setDescription("Replies with Ping!!!")
].map(command => command.toJSON());

const rest = new REST({ version: '10'}).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands})
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);