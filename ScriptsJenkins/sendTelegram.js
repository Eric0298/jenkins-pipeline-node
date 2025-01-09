const TelegramBot = require('node-telegram-bot-api');
const chatID = process.argv[3];
const botTOKEN = '7864713946:AAG5UjMYTm39SdLAALunWhqWVe2oWF80tyQ';
const bot = new TelegramBot(botTOKEN, {polling: false});
const message = process.argv[2];

if (!chatID || chatID === 'numero_chat') {
    console.error("Error: chatID no proporcionado o inválido.");
    process.exit(1);
}

bot.sendMessage(chatID, message)
    .then(() => {
        console.log('Mensaje enviado con éxito a Telegram');
        process.exit(0);
    })
    .catch((error) => {
        console.error(`Error enviando mensaje: ${error.message}`);
        process.exit(1);
    });
