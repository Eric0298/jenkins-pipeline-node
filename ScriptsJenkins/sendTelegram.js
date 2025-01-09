const TelegramBot = require('node-telegram-bot-api');
const message = process.argv[2];
const chatID = process.argv[3];
const botTOKEN = '7864713946:AAG5UjMYTm39SdLAALunWhqWVe2oWF80tyQ';

if (!message || !chatID) {
    console.error('Error: mensaje o chatID no proporcionado.');
    process.exit(1);
}

const bot = new TelegramBot(botTOKEN, {polling: false});

bot.sendMessage(chatID, message)
    .then(() => {
        console.log('Mensaje enviado correctamente.');
        process.exit(0);
    })
    .catch((err) => {
        console.error('Error al enviar mensaje:', err.message);
        process.exit(1);
    });
