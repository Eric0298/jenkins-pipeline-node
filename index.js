const TelegramBot = require('node-telegram-bot-api');
const botTOKEN = '7864713946:AAG5UjMYTm39SdLAALunWhqWVe2oWF80tyQ';
const bot = new TelegramBot(botTOKEN, {polling: true});

bot.on('message', (msg) => {
    console.log(`Chat ID: ${msg.chat.id}`);
    bot.sendMessage(msg.chat.id, 'Tu chat ID ha sido registrado.');
});